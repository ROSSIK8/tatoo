from django.shortcuts import render
from .models import TextAboutUs, ImageAboutUs, ImageMyWorks


def actions_on_page(request):
    text_about_us = TextAboutUs.objects.first()
    images_about_us = ImageAboutUs.objects.all()
    images_my_works = ImageMyWorks.objects.all()
    context = {
        'text_about_us': text_about_us,
        'images_about_us': images_about_us,
        'images_my_works': images_my_works,
    }
    return render(request, 'index.html', context)
