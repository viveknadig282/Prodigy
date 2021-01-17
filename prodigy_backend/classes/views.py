from django.http.response import JsonResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets

from accounts.models import Profile
from .recommendations import *
from .serializers import ClassSerializer, ClassModelSerializer
from .models import Class, Review
from .forms import NewClassForm


# @login_required(login_url='/accounts/login/')
class ClassView(viewsets.ModelViewSet):
    serializer_class = ClassModelSerializer
    queryset = Class.objects.all()


def classViewSet(request):
    queryset = Class.objects.all()
    classes = []
    for query in queryset:
        serializer = ClassSerializer(query)
        classes.append(serializer.get_serialized())

    return JsonResponse({'courses': classes})


def sigleClassView(request, class_id):
    class_object = get_object_or_404(Class, pk=class_id)
    serializer = ClassSerializer(class_object)
    return JsonResponse({'course': serializer.get_serialized()})


@csrf_exempt
@require_http_methods(['POST'])
def createClassView(request):
    form = NewClassForm(request.POST)

    if form.is_valid():
        teacher_id = form.cleaned_data['teacher']
        subject_id = form.cleaned_data['subject']
        name = form.cleaned_data['name']
        cost = form.cleaned_data['cost']
        desc = form.cleaned_data['desc']

        teacher = Profile
        class_object = Class()

        return JsonResponse({'data': form.cleaned_data})
    else:
        return JsonResponse({'error': form.errors})
