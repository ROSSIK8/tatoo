# Generated by Django 5.0.6 on 2024-05-24 03:41

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0005_alter_imageaboutus_created_at_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='service',
            name='queue_number',
            field=models.PositiveIntegerField(null=True),
        ),
    ]
