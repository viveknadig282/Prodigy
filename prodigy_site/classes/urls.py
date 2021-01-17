from django.urls import path

from . import views

urlpatterns = [
    # path('classes', views.ClassView, name='classes'),
    path('all', views.ClassViewSet, name='all classes'),
    path('id/<int:class_id>/', views.SigleClassView, name='class by id')
]
