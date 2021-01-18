from json.encoder import JSONEncoder
from django.http.response import JsonResponse
from django.shortcuts import render
from django.contrib.auth.decorators import login_required
from django.shortcuts import get_object_or_404
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets

from django.contrib.auth.models import User
from accounts.models import Profile, Subject
from .recommendations import *
from .serializers import ClassSerializer, ClassModelSerializer, SubjectSerializer
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
    print(request.POST)

    if form.is_valid():
        teacher_id = form.cleaned_data['teacher']
        subject_id = form.cleaned_data['subject']
        name = form.cleaned_data['name']
        cost = form.cleaned_data['cost']
        desc = form.cleaned_data['desc']

        teacher_user = User.objects.filter(pk=teacher_id).first()
        teacher_profile = Profile.objects.filter(user=teacher_user).first()
        subject = Subject.objects.filter(pk=subject_id).first()

        if teacher_profile is None:
            return JsonResponse({'valid': False, 'error': {'user': ['This user does not exist, try signing in or signing up']}})

        class_object = Class(name=name, desc=desc, cost=cost,
                             teacher=teacher_profile, subject=subject)
        class_object.save()

        return JsonResponse({'valid': True})
    else:
        return JsonResponse({'error': form.errors})


class SubjectView(viewsets.ModelViewSet):
    serializer_class = SubjectSerializer
    queryset = Subject.objects.all()
