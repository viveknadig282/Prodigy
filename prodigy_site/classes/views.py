from django.http.response import JsonResponse
from django.shortcuts import render
from .recommendations import *
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializers import ClassSerializer, ClassModelSerializer
from .models import Class, Review
from django.shortcuts import get_object_or_404


# @login_required(login_url='/accounts/login/')
class ClassView(viewsets.ModelViewSet):
    serializer_class = ClassModelSerializer
    queryset = Class.objects.all()


def ClassViewSet(request):
    queryset = Class.objects.all()
    classes = []
    for query in queryset:
        serializer = ClassSerializer(query)
        classes.append(serializer.get_serialized())

    return JsonResponse({'courses': classes})


def SigleClassView(request, class_id):
    class_object = get_object_or_404(Class, pk=class_id)
    serializer = ClassSerializer(class_object)
    return JsonResponse(serializer.get_serialized())
