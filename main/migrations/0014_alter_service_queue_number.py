# Generated by Django 5.0.6 on 2024-05-24 12:24

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0013_alter_service_queue_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='queue_number',
            field=models.PositiveIntegerField(editable=False, verbose_name='Номер'),
        ),
    ]
