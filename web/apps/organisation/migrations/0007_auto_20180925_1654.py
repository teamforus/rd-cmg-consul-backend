# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-25 13:54
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organisation', '0006_auto_20180925_1639'),
    ]

    operations = [
        migrations.AlterModelManagers(
            name='organisationbase',
            managers=[
            ],
        ),
        migrations.AlterField(
            model_name='organisationbase',
            name='title',
            field=models.CharField(help_text='Enter organisation name', max_length=200, null=True),
        ),
    ]
