# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-29 03:28
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('viajante', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='viagem',
            name='dinheiro_total',
            field=models.FloatField(blank=True, null=True),
        ),
    ]