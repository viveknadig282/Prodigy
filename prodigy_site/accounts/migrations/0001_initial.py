# Generated by Django 3.1.5 on 2021-01-16 20:04

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=64)),
            ],
        ),
        migrations.CreateModel(
            name='Profile',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('age', models.PositiveIntegerField()),
                ('gender', models.PositiveSmallIntegerField()),
                ('challenging_courses', models.BooleanField()),
                ('study_time', models.PositiveSmallIntegerField()),
                ('careers_interest', models.PositiveSmallIntegerField()),
                ('sports_interest', models.PositiveSmallIntegerField()),
                ('fields_help', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='challenging_fields', to='accounts.subject')),
                ('fields_interest', models.ForeignKey(null=True, on_delete=django.db.models.deletion.PROTECT, related_name='fields_of_interest', to='accounts.subject')),
                ('user', models.OneToOneField(on_delete=django.db.models.deletion.CASCADE, to=settings.AUTH_USER_MODEL)),
            ],
        ),
    ]