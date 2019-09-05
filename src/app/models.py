from django.db import models
from django.contrib.auth.models import User

from cloudinary.models import CloudinaryField

# Create your models here.
class Anime(models.Model):

    name = models.CharField(max_length=150)
    original_manga = models.CharField(max_length=150)
    last_adapted_chapter = models.IntegerField()
    likes = models.IntegerField()
    update_date = models.DateTimeField()
    creation_date = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.name
    

class Profile(models.Model):

    user = models.OneToOneField(User, on_delete=models.CASCADE, null=True)

    image = CloudinaryField("image")
    creation_date = models.DateTimeField(auto_now_add=True)
