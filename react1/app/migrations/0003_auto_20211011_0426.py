# Generated by Django 3.2.7 on 2021-10-11 04:26

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('app', '0002_user'),
    ]

    operations = [
        migrations.CreateModel(
            name='Apage',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=10)),
            ],
            options={
                'permissions': [('look_a_page', 'can get this page')],
            },
        ),
        migrations.DeleteModel(
            name='User',
        ),
    ]
