# Generated by Django 2.2.4 on 2019-09-03 15:06

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0003_profile_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='profile',
            name='creation_date',
            field=models.DateTimeField(auto_now_add=True),
        ),
    ]
