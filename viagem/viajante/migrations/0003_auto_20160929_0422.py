# -*- coding: utf-8 -*-
# Generated by Django 1.10.1 on 2016-09-29 04:22
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('viajante', '0002_auto_20160929_0328'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='agente',
            name='telefone',
        ),
        migrations.AddField(
            model_name='pessoa',
            name='telefone',
            field=models.CharField(blank=True, max_length=15, null=True),
        ),
        migrations.AlterField(
            model_name='viajante',
            name='dinheiro',
            field=models.FloatField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='viajante',
            name='idade',
            field=models.IntegerField(blank=True, null=True),
        ),
        migrations.AlterField(
            model_name='viajante',
            name='tema',
            field=models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, to='viajante.Tema', verbose_name='Tema'),
        ),
    ]
