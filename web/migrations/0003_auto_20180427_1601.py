# Generated by Django 2.0.3 on 2018-04-27 08:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('web', '0002_auto_20180427_1559'),
    ]

    operations = [
        migrations.AlterField(
            model_name='map',
            name='GlobeID',
            field=models.IntegerField(default=0),
        ),
        migrations.AlterField(
            model_name='map',
            name='ImageDesc',
            field=models.TextField(default='Describe This Image', max_length=500),
        ),
    ]
