# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-25 14:12
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('organisation', '0008_organisationbase_title1'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='organisationbase',
            name='title1',
        ),
        migrations.AddField(
            model_name='organisationbase',
            name='private_key',
            field=models.CharField(help_text='Private key', max_length=200, null=True),
        ),
        migrations.AddField(
            model_name='organisationbase',
            name='public_key',
            field=models.CharField(help_text='Public key', max_length=200, null=True),
        ),
    ]
