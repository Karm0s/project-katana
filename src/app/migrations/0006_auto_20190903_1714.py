# Generated by Django 2.2.4 on 2019-09-03 16:14

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0005_anime_creation_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='anime',
            name='name',
            field=models.CharField(max_length=150),
        ),
        migrations.AlterField(
            model_name='anime',
            name='original_manga',
            field=models.CharField(max_length=150),
        ),
    ]
