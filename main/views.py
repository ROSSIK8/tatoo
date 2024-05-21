from django.shortcuts import render
from .models import TextAboutUs, ImageAboutUs, BackgroundAboutUs, ImageMyWorks


def actions_on_page(request):
    text_about_us = TextAboutUs.objects.first()
    images_about_us = ImageAboutUs.objects.all()
    background_about_us = BackgroundAboutUs.objects.first()
    images_my_works = ImageMyWorks.objects.all()
    context = {
        'text_about_us': text_about_us,
        'images_about_us': images_about_us,
        'background_about_us': background_about_us,
        'images_my_works': images_my_works,
    }
    return render(request, 'index.html', context)
