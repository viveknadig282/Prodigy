from django.urls import path

from . import views

urlpatterns = [
    path('classes', views.ClassView, name='classes'),
]
