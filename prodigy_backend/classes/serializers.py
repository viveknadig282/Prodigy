from accounts.models import Subject
from rest_framework import serializers
from .models import Class, Review


class ClassModelSerializer(serializers.ModelSerializer):
    class Meta:
        model = Class
        fields = ('id', 'name', 'subject', 'teacher', 'cost', 'desc')


class ClassSerializer():
    def __init__(self, class_object):
        self.serialized = ClassModelSerializer(class_object).data
        reviews = Review.objects.filter(class_for=class_object)
        teacher = class_object.teacher
        subject = class_object.subject

        self.serialized["subject"] = subject.name
        self.serialized["teacher"] = teacher.user.username

        if len(reviews) == 0:
            self.serialized['avr_reviews'] = 0
        else:
            sum = 0
            for review in reviews:
                sum += review.rating

            self.serialized['avr_reviews'] = sum/len(reviews)

        self.data = self.serialized

    def get_serialized(self):
        return self.serialized


class SubjectSerializer(serializers.ModelSerializer):
    class Meta:
        model = Subject
        fields = ('id', 'name')
