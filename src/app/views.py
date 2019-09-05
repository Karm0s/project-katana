from django.shortcuts import render
from .models import Anime
from django.views.generic import (
    ListView,
    TemplateView,
)

# Create your views here.

class IndexListView(ListView):
    template_name = 'index.html'

    context_object_name = 'animes'

    def get_queryset(self):
        return Anime.objects.all()
    
    def get_context_data(self, **kwargs):
        context = super().get_context_data(**kwargs)
        context["user"] = self.request.user
        return context
    

class LoginView(TemplateView):
    template_name = "login.html"

    def post(self, request, *args, **kwargs):
        form = request.POST[""]



class RegisterView(TemplateView):
    template_name = "register.html"