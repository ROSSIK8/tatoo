# Generated by Django 5.0.6 on 2024-05-19 12:29

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('main', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='ImageMyWorks',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('img', models.ImageField(upload_to='my_works/')),
            ],
        ),
        migrations.AlterField(
            model_name='imageaboutus',
            name='img',
            field=models.ImageField(upload_to='about_us/'),
        ),
    ]