# -*- coding: utf-8 -*-
# Generated by Django 1.11.15 on 2018-09-25 14:25
from __future__ import unicode_literals

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('organisation', '0009_auto_20180925_1712'),
    ]

    operations = [
        migrations.RenameModel(
            old_name='OrganisationBase',
            new_name='Organisation',
        ),
    ]
