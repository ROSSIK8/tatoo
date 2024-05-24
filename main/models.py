from django.db import models


class TextAboutUs(models.Model):
    text = models.TextField()

    class Meta:
        verbose_name_plural = 'Текст'

    def __str__(self):
        return "Текст 'О нас'"

# Классы для картинок


class BaseImage(models.Model):
    created_at = models.DateTimeField(auto_now_add=True, verbose_name='Время создания')
    update_at = models.DateTimeField(auto_now=True, verbose_name='Время обновления')

    class Meta:
        abstract = True

    def __str__(self):
        return f'{self.img}'


class ImageAboutUs(BaseImage):
    img = models.ImageField(upload_to='about_us/')

    class Meta:
        verbose_name_plural = 'Картинки о нас'


class ImageMyWorks(BaseImage):
    img = models.ImageField(upload_to='my_work/')

    class Meta:
        ordering = ['-update_at']
        verbose_name_plural = 'Мои работы'


# Классы для фонов


class BaseBackground(models.Model):
    background = models.ImageField()

    class Meta:
        abstract = True
        verbose_name_plural = 'Фон'

    def __str__(self):
        return f'{self.background}'


class BackgroundAboutUs(BaseBackground):
    background = models.ImageField(upload_to='about_us/background/')

    class Meta:
        verbose_name_plural = 'Фон'


class BackgroundMyWorks(BaseBackground):
    background = models.ImageField(upload_to='my_work/background/')

    class Meta:
        verbose_name_plural = 'Фон'


class BackgroundService(BaseBackground):
    background = models.ImageField(upload_to='service/background/')

    class Meta:
        verbose_name_plural = 'Фон'


class BackgroundRecord(BaseBackground):
    background = models.ImageField(upload_to='record/background/')

    class Meta:
        verbose_name_plural = 'Фон'


class BackgroundReviews(BaseBackground):
    background = models.ImageField(upload_to='reviews/background/')

    class Meta:
        verbose_name_plural = 'Фон'


# Прочие классы


class Service(models.Model):
    title = models.CharField(max_length=255, verbose_name='Название')
    price = models.PositiveIntegerField(verbose_name='Цена')
    queue_number = models.PositiveIntegerField(verbose_name='Номер', editable=False)
    created_at = models.DateTimeField(auto_now_add=True)
    update_at = models.DateTimeField(auto_now=True)

    def save(self, *args, **kwargs):
        if not self.pk:
            max_queue_number = Service.objects.aggregate(models.Max('queue_number'))['queue_number__max']
            self.queue_number = (max_queue_number or 0) + 1
        super().save(*args, **kwargs)

    def move_up(self):
        if self.queue_number > 1:
            previous_service = Service.objects.get(queue_number=self.queue_number - 1)
            previous_service.queue_number += 1
            previous_service.save()
            self.queue_number -= 1
            self.save()

    def move_down(self):
        max_queue_number = Service.objects.aggregate(models.Max('queue_number'))['queue_number__max']
        if self.queue_number < max_queue_number:
            next_service = Service.objects.get(queue_number=self.queue_number + 1)
            next_service.queue_number -= 1
            next_service.save()
            self.queue_number += 1
            self.save()

    def __str__(self):
        return f'{self.title}'

    class Meta:
        verbose_name_plural = 'Услуги и цены'
        ordering = ['queue_number']
# class Service(models.Model):
#     title = models.CharField(max_length=255, verbose_name='Название')
#     price = models.PositiveIntegerField(verbose_name='Цена')
#     queue_number = models.PositiveIntegerField(verbose_name='Номер')
#     created_at = models.DateTimeField(auto_now_add=True)
#     update_at = models.DateTimeField(auto_now=True)
#
#     def __str__(self):
#         return f'{self.title}'
#
#     class Meta:
#         verbose_name_plural = 'Услуги и цены'
#         ordering = ['queue_number']

