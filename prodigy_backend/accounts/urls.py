from django.urls import path
from django.urls.conf import include
from rest_framework.routers import DefaultRouter

from . import views

router = DefaultRouter()
router.register(r'profiles', views.ProfileView, basename='profiles')

urlpatterns = [
    path('login', views.login, name='login'),
    path('signup', views.signup, name='signup'),
    path('take', views.tookCourse, name='when the user takes the course'),
    path('api/', include(router.urls), name='profiles'),
]
