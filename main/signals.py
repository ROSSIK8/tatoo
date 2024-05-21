from django.db.models.signals import post_delete
from django.dispatch import receiver
from .models import ImageMyWorks, ImageAboutUs
import os


@receiver(post_delete, sender=ImageAboutUs)
def delete_img_about_us(sender, instance, **kwargs):
    if instance.img:
        img_path = instance.img.path
        if os.path.isfile(img_path):
            os.remove(img_path)

