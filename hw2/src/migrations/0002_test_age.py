# Generated by Django 3.2.7 on 2021-09-29 04:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='test',
            name='age',
            field=models.IntegerField(default=10),
            preserve_default=False,
        ),
    ]
