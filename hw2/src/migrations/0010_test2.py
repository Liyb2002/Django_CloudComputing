# Generated by Django 3.2.7 on 2021-10-26 04:43

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0009_transactions'),
    ]

    operations = [
        migrations.CreateModel(
            name='Test2',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=20)),
            ],
        ),
    ]
