from django.shortcuts import render
from .models import *


def actions_on_page(request):
    # О нас
    text_about_us = TextAboutUs.objects.first()
    images_about_us = ImageAboutUs.objects.all()
    background_about_us = BackgroundAboutUs.objects.first()

    # Мои работы
    images_my_works = ImageMyWorks.objects.all()
    background_my_works = BackgroundMyWorks.objects.first()

    # Услуги
    services = Service.objects.all()
    background_price = BackgroundService.objects.first()

    # Записьна приём
    background_record = BackgroundRecord.objects.first()

    # Отзывы
    background_reviews = BackgroundReviews.objects.first()
    context = {
        'text_about_us': text_about_us,
        'images_about_us': images_about_us,
        'images_my_works': images_my_works,

        'background_about_us': background_about_us,

        'background_my_works': background_my_works,

        'services': services,
        'background_price': background_price,

        'background_record': background_record,

        'background_reviews': background_reviews,
    }
    return render(request, 'index.html', context)
