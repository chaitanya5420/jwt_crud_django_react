# Generated by Django 5.2 on 2025-04-09 07:50

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_rename_email_customuser_user_email_and_more'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='customuser',
            name='user_pk',
        ),
        migrations.AddField(
            model_name='customuser',
            name='id',
            field=models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID'),
        ),
    ]
