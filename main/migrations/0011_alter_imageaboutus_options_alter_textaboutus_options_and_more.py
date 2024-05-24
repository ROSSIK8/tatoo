# Generated by Django 5.0.6 on 2024-05-24 11:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0010_alter_service_created_at_alter_service_update_at'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='imageaboutus',
            options={'verbose_name_plural': 'Картинки о нас'},
        ),
        migrations.AlterModelOptions(
            name='textaboutus',
            options={'verbose_name_plural': 'Текст'},
        ),
        migrations.AlterField(
            model_name='imageaboutus',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Время создания'),
        ),
        migrations.AlterField(
            model_name='imageaboutus',
            name='update_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Время обновления'),
        ),
        migrations.AlterField(
            model_name='imagemyworks',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True, verbose_name='Время создания'),
        ),
        migrations.AlterField(
            model_name='imagemyworks',
            name='update_at',
            field=models.DateTimeField(auto_now=True, verbose_name='Время обновления'),
        ),
    ]