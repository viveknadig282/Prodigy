# Generated by Django 3.1.5 on 2021-01-18 03:51

import django.core.validators
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('classes', '0003_auto_20210117_2058'),
    ]

    operations = [
        migrations.AlterField(
            model_name='class',
            name='cost',
            field=models.DecimalField(decimal_places=2, max_digits=8),
        ),
        migrations.AlterField(
            model_name='review',
            name='rating',
            field=models.DecimalField(decimal_places=1, max_digits=2, validators=[django.core.validators.MaxValueValidator(5), django.core.validators.MinValueValidator(0)]),
        ),
    ]