from django.db.models.signals import post_delete, pre_save
from django.dispatch import receiver
from .models import *
from django.core.exceptions import ValidationError
import os


MODEL_VALIDATION_MESSAGES = {
    TextAboutUs: "Возможен только один текст для 'О нас'.",
    BackgroundAboutUs: "Возможен только один фон для 'О нас'.",
    BackgroundMyWorks: "Возможен только один фон для 'Мои работы'.",
    BackgroundService: "Возможен только один фон для 'Услуги'.",
    BackgroundRecord: "Возможен только один фон для 'Запись на приём'.",
    BackgroundReviews: "Возможен только один фон для 'Отзывы'.",
}
MODEL_IMG_LIST = [ImageAboutUs, ImageMyWorks]
MODEL_BG_LIST = [BackgroundAboutUs, BackgroundMyWorks, BackgroundService,
                 BackgroundRecord, BackgroundReviews]


def delete_file(file_field):
    if file_field:
        file_path = file_field.path
        if os.path.isfile(file_path):
            os.remove(file_path)


def delete_img_or_bg(sender, instance, **kwargs):
    if sender in MODEL_IMG_LIST:
        delete_file(instance.img)
    if sender in MODEL_BG_LIST:
        delete_file(instance.background)


for model in (MODEL_BG_LIST + MODEL_IMG_LIST):
    post_delete.connect(delete_img_or_bg, sender=model)


@receiver(pre_save)
def only_one(sender, instance, **kwargs):
    if sender in MODEL_VALIDATION_MESSAGES and not instance.pk and sender.objects.exists():
        raise ValidationError(MODEL_VALIDATION_MESSAGES[sender])
