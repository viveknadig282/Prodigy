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
from classes.recommendations import sim
from .forms import ProfileCreationForm, ProfileForm
from .models import Profile, Subject


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
            return JsonResponse({'valid': True, 'form': form.cleaned_data})
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
        return JsonResponse({'valid': True})
    else:
        return JsonResponse({'error': form.errors})


def logout_view(request):
    logout(request)
    # Redirect to a success page.


def test(request):
    user = User("myusername", "myemail@email.com", "mypassword")
    math = Subject(id=1, name="math")
    science = Subject(id=2, name="sciaskfasce")
    eng = Subject(id=3, name="eng")
    art = Subject(id=5, name="art")

    viv = Profile(user=user, age=15, gender=1, fields_interest=eng, fields_help=math, challenging_courses=True,
                  study_time=1, careers_interest=7, sports_interest=2)

    ak = Profile(user=user, age=20, gender=1, fields_interest=science, fields_help=eng, challenging_courses=True,
                 study_time=2, careers_interest=7, sports_interest=7)

    bestprofile = Profile(user=user, age=58, gender=4, fields_interest=art, fields_help=science, challenging_courses=False,
                          study_time=3, careers_interest=2, sports_interest=5)

    akviv = sim(ak, viv)
    akad = sim(ak, bestprofile)
    vivad = sim(viv, bestprofile)

    return JsonResponse({
        'akhil vivek': akviv,
        'akhil adi': akad,
        'vivek adi': vivad
    })
