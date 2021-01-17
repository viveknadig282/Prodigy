from django.urls import path

from . import views

urlpatterns = [
    # path('classes', views.ClassView, name='classes'),
    path('all', views.classViewSet, name='get all classes'),
    path('id/<int:class_id>/', views.sigleClassView, name='get class by id'),
    path('create', views.createClassView, name='create a new class')
]
