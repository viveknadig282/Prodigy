from django.http.response import JsonResponse
from django.shortcuts import render
from .recommendations import *
from django.contrib.auth.decorators import login_required
from rest_framework import viewsets
from .serializers import ClassSerializer
from .models import Class, Review


# @login_required(login_url='/accounts/login/')
class ClassView(viewsets.ModelViewSet):
    serializer_class = ClassSerializer
    queryset = Class.objects.all()


def ClassViewSet(request):
    queryset = Class.objects.all()
    classes = []
    for query in queryset:
        serialized = ClassSerializer(query).data
        reviews = Review.objects.filter(class_for=query)
        teacher = query.teacher
        subject = query.subject

        serialized["subject"] = subject.name
        serialized["teacher"] = teacher.user.username

        if len(reviews) == 0:
            serialized['avr_reviews'] = 0
        else:
            sum = 0
            for review in reviews:
                sum += review.rating

            serialized['avr_reviews'] = sum/len(reviews)

        classes.append(serialized)

    return JsonResponse({'courses': classes})
