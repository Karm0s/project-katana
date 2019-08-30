from django.db import models

# Create your models here.
class Anime(models.Model):

    name = models.CharField(max_length=100)
    original_manga = models.CharField(max_length=100)
    last_adapted_chapter = models.IntegerField()
    likes = models.IntegerField()
    update_date = models.DateTimeField()

    def __str__(self):
        return self.name
    

