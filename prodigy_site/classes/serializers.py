from rest_framework import serializers
from .models import Class, Review


class ClassSerializer(serializers.ModelSerializer):
    average_rating = Review

    class Meta:
        model = Class
        fields = ('id', 'subject', 'teacher', 'cost', 'desc')
