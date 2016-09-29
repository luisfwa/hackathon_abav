# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-29 15:08
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('viajante', '0003_auto_20160929_0422'),
    ]

    operations = [
        migrations.AddField(
            model_name='viagem',
            name='pontuacao',
            field=models.IntegerField(blank=True, default=0, null=True),
        ),
        migrations.AlterField(
            model_name='viajante',
            name='tema',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.CASCADE, to='viajante.Tema', verbose_name='Tema'),
        ),
    ]
