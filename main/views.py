from django.shortcuts import render
from .models import TextAboutUs, ImageAboutUs


def actions_on_page(request):
    text_about_us = TextAboutUs.objects.first()
    images_about_us = ImageAboutUs.objects.all()
    context = {
        'text_about_us': text_about_us,
        'images': images_about_us,
    }
    return render(request, 'index.html', context)
