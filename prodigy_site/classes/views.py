from django.shortcuts import render
from .recommendations import *
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializers import ClassSerializer
from .models import Class


# @login_required(login_url='/accounts/login/')
class ClassView(viewsets.ModelViewSet):
    serializer_class = ClassSerializer
    queryset = Class.objects.all()
