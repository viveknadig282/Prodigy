from django.http.request import HttpRequest
from django.shortcuts import render
from django.contrib.auth import login as auth_login
from django.contrib.auth import authenticate, logout
from django.http import JsonResponse
from django.contrib.auth.models import User
from django.contrib.auth import authenticate
from django.views.decorators.http import require_http_methods
from django.views.decorators.csrf import csrf_exempt
from rest_framework import viewsets

from .serializers import ProfileSerializer
from .forms import ProfileCreationForm, ProfileForm
from .models import Profile, Subject
import json


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


@csrf_exempt
@require_http_methods(['POST'])
def login(request):
    form = ProfileForm(request.POST)
    if form.is_valid():
        user = authenticate(
            username=form.cleaned_data['username'], password=form.cleaned_data['password'])
        if user is not None:
            # A backend authenticated the credentials
            auth_login(request, user)
            return JsonResponse({'valid': True, 'id': user.id})
        else:
            return JsonResponse({'valid': False})
    else:
        return JsonResponse({'error': form.errors})


@csrf_exempt
@require_http_methods(['POST'])
def signup(request):
    form = ProfileCreationForm(request.POST)

    if form.is_valid():
        print(form.cleaned_data)
        user = User(username=form.cleaned_data['username'],
                    password=form.cleaned_data['password'], email=form.cleaned_data['email'])
        user.save()
        profile = Profile(
            user=user, age=form.cleaned_data['age'], gender=form.cleaned_data['gender'])
        profile.save()
        auth_login(request, user)
        return JsonResponse({'valid': True, 'id': user.id})
    else:
        return JsonResponse({'error': form.errors})


def logout_view(request):
    logout(request)
    # Redirect to a success page.


@csrf_exempt
def tookCourse(request):
    print(request.body)
    body = json.loads(request.body)
    user = User.objects.filter(pk=body['userid']).first()
    profile = Profile.objects.filter(user=user).first()
    profile.latest_course = body['courseid']
    profile.save()

    return JsonResponse({'saved': True})
