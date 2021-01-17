from django.urls import path

from . import views

urlpatterns = [
    path('classes', views.ClassView, name='classes'),
    path('all', views.ClassViewSet, name='all classes')
]
