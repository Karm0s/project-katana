from django.shortcuts import render
from .models import Anime
from django.views.generic import (
    ListView,
)

# Create your views here.

class IndexListView(ListView):
    template_name = 'index.html'

    def get_queryset(self):
        return Anime.objects.all()
    