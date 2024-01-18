from django.db import models

# Create your models here.

class Servies(models.Model):
    name = models.CharField(max_length = 50)
    content = models.TextField()
    icon = models.CharField(max_length = 50)

class Skills(models.Model):
    img = models.ImageField(upload_to = 'skills_image')
