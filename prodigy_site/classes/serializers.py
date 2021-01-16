from rest_framework import serializers
from .models import Class


class ClassSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('id', 'subject', 'teacher', 'cost', 'desc')
