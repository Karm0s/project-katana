from django.db.models.signals import pre_delete, post_save, pre_save
from django.dispatch import receiver
from django.contrib.auth.models import User
import cloudinary
from ..models import Profile

@receiver(post_save, sender=User)
def create_user_profile(sender, instance, created, **kwargs):
	print("profile created")
	if created :
		Profile.objects.create(user=instance)

# @receiver(post_save, sender=User)
# def save_user_profile(sender, instance, **kwargs):
#     print("here")
#     instance.profile.save()
@receiver(pre_delete, sender=User)
def here(sender, instance, **kwargs):
    print("Fuck Im tired of this shit")


@receiver(pre_delete, sender=Profile)
def photo_delete(sender, instance, **kwargs):
	cloudinary.uploader.destroy(instance.image.public_id)
