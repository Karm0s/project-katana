from django.db import models
from django.db.models.signals import pre_delete
from cloudinary.models import CloudinaryField

import cloudinary

# Create your models here.
class Anime(models.Model):

    name = models.CharField(max_length=100)
    original_manga = models.CharField(max_length=100)
    last_adapted_chapter = models.IntegerField()
    likes = models.IntegerField()
    update_date = models.DateTimeField()

    def __str__(self):
        return self.name
    

class Profile(Models.model):

    image_url = models.CharField()
    image = CloudinaryField()

@receiver(pre_delete, sender=Profile)
def photo_delete(sender, instance, **kwargs):
    cloudinary.uploader.destroy(instance.image.public_id)

