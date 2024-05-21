from django.db import models


class TextAboutUs(models.Model):
    text = models.TextField()

    class Meta:
        verbose_name = 'Текс "О нас"'
        verbose_name_plural = 'Текс "О нас"'

    def __str__(self):
        return "About Us Text"


class ImageAboutUs(models.Model):
    img = models.ImageField(upload_to='about_us/')

    class Meta:
        verbose_name = 'Картинки "О нас"'
        verbose_name_plural = 'Картинки "О нас"'

    def __str__(self):
        return f'{self.img}'


class ImageMyWorks(models.Model):
    img = models.ImageField(upload_to='my_works/')
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)


    created_at.verbose_name = 'Время создания'
    update_at.verbose_name = 'Время обновления'



    class Meta:
        ordering = ['-update_at']
        verbose_name = 'Мои работы'
        verbose_name_plural = 'Мои работы'

    def __str__(self):
        return f'{self.img}'

