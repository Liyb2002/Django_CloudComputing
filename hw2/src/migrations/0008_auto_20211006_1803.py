# Generated by Django 3.2.7 on 2021-10-06 18:03

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('src', '0007_message'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='group',
            name='user',
        ),
        migrations.DeleteModel(
            name='Message',
        ),
        migrations.RemoveField(
            model_name='userprofile',
            name='user',
        ),
        migrations.DeleteModel(
            name='Group',
        ),
        migrations.DeleteModel(
            name='User',
        ),
        migrations.DeleteModel(
            name='Userprofile',
        ),
    ]
