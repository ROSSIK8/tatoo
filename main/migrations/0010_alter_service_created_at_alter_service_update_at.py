# Generated by Django 5.0.6 on 2024-05-24 03:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0009_alter_service_queue_number'),
    ]

    operations = [
        migrations.AlterField(
            model_name='service',
            name='created_at',
            field=models.DateTimeField(auto_now_add=True),
        ),
        migrations.AlterField(
            model_name='service',
            name='update_at',
            field=models.DateTimeField(auto_now=True),
        ),
    ]
