# Generated by Django 5.0.6 on 2024-05-24 03:41

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0006_service_queue_number'),
    ]

    operations = [
        migrations.AlterModelOptions(
            name='service',
            options={'ordering': ['-queue_number'], 'verbose_name_plural': 'Услуги и цены'},
        ),
    ]
