from django.contrib import admin
from django.utils.html import format_html
from .models import TextAboutUs, ImageAboutUs, ImageMyWorks


admin.site.register(TextAboutUs)
admin.site.register(ImageAboutUs)


@admin.register(ImageMyWorks)
class ImageMyWorksAdmin(admin.ModelAdmin):
    list_display = ['display_image', 'created_at', 'update_at']
    readonly_fields = ['created_at', 'update_at']

    def display_image(self, obj):
        return format_html('<img src="{}" width="100" height="100" />', obj.img.url)
    display_image.short_description = 'Картинка'
    display_image.allow_tags = True


# Register your models here.
