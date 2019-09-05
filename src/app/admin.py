from django.contrib import admin

from .models import Anime, Profile

# Register your models here.
class ProfileAdmin(admin.ModelAdmin):
    list_display = ("creation_date", )

admin.site.register(Anime)
admin.site.register(Profile, ProfileAdmin)