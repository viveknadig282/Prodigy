from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'subjects', views.SubjectView, basename='subjects')

urlpatterns = [
    # path('classes', views.ClassView, name='classes'),
    path('all', views.classViewSet, name='get all classes'),
    path('id/<int:class_id>/', views.sigleClassView, name='get class by id'),
    path('create', views.createClassView, name='create a new class'),
    path('', include(router.urls), name='subject api')
]
