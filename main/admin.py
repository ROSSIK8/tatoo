from django.contrib import admin
from django.utils.html import format_html
from django.shortcuts import redirect, get_object_or_404
from django.urls import path
from .models import *

MODEL_IMG_LIST = [ImageAboutUs, ImageMyWorks]
MODEL_BG_LIST = [BackgroundAboutUs, BackgroundMyWorks, BackgroundService,
                 BackgroundRecord, BackgroundReviews]


class BaseAdmin(admin.ModelAdmin):

    def display_file(self, obj, file_field):
        file = getattr(obj, file_field, None)
        if file:
            return format_html('<img src="{}" width="100" height="100">', file.url)
        return "No Image"


class ImageAdmin(BaseAdmin):
    list_display = ['display_image', 'created_at', 'update_at']
    readonly_fields = ['created_at', 'update_at']

    def display_image(self, obj):
        return self.display_file(obj, 'img')
    display_image.short_description = 'Картинка'
    display_image.allow_tags = True


class BackgroundAdmin(BaseAdmin):
    list_display = ['display_background']

    def display_background(self, obj):
        return self.display_file(obj, 'background')
    display_background.short_description = 'Фон'
    display_background.allow_tags = True


for model in MODEL_IMG_LIST + MODEL_BG_LIST:
    if model in MODEL_IMG_LIST:
        admin.site.register(model, ImageAdmin)
    else:
        admin.site.register(model, BackgroundAdmin)


admin.site.register(TextAboutUs)


class ServiceAdmin(admin.ModelAdmin):
    list_display = ['title', 'price', 'queue_number', 'move_up_down']

    def move_up_down(self, obj):
        print(self)
        print(obj)
        return format_html(
            '<a class="button" href="{}">Вверх</a>&nbsp;'
            '<a class="button" href="{}">Вниз</a>',
            f'{obj.id}/move_up/',
            f'{obj.id}/move_down/'
        )

    move_up_down.short_description = 'Изменить порядок'
    move_up_down.allow_tags = True

    def get_urls(self):
        urls = super().get_urls()
        custom_urls = [
            path('<int:pk>/move_up/', self.admin_site.admin_view(self.move_up), name='service_move_up'),
            path('<int:pk>/move_down/', self.admin_site.admin_view(self.move_down), name='service_move_down'),
        ]

        return custom_urls + urls

    def move_up(self, request, pk):
        service = get_object_or_404(Service, pk=pk)
        service.move_up()
        return redirect('admin:main_service_changelist')

    def move_down(self, request, pk):
        service = get_object_or_404(Service, pk=pk)
        service.move_down()
        return redirect('admin:main_service_changelist')


admin.site.register(Service, ServiceAdmin)
