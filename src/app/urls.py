from django.urls import path

from .views import (
    IndexListView, 
    LoginView,
    RegisterView,
)
urlpatterns = [
    path('', IndexListView.as_view(), name="index"),
    path('login', LoginView.as_view(), name="login"),
    path('register', RegisterView.as_view(), name="register"),
]
