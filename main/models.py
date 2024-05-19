from django.db import models


class TextAboutUs(models.Model):
    text = models.TextField()

    def __str__(self):
        return "About Us Text"


class ImageAboutUs(models.Model):
    img = models.ImageField(upload_to='main/')

    def __str__(self):
        return f'{self.img}'
