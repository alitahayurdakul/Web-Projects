from django.db import models

# Create your models here.
class Backend(models.Model):
    Text=models.CharField(max_length=100)
    Check=models.BooleanField()