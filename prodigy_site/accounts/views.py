from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import JsonResponse
from .models import Profile, Subject
from django.contrib.auth.models import User
from rest_framework import viewsets
from .serializers import ProfileSerializer
from classes.recommendations import sim


class ProfileView(viewsets.ModelViewSet):
    serializer_class = ProfileSerializer
    queryset = Profile.objects.all()


def login(request):
    username = request.POST['username']
    password = request.POST['password']
    user = authenticate(request, username=username, password=password)
    if user is not None:
        login(request, user)
        # Redirect to a success page.
    else:
        # Return an 'invalid login' error message.
        pass


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