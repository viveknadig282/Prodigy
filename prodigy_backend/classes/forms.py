from django import forms
from django.core.exceptions import ValidationError
from accounts.models import Subject
from django.contrib.auth.models import User


class NewClassForm(forms.Form):
    teacher = forms.IntegerField()
    name = forms.CharField(max_length=64)
    subject = forms.IntegerField()
    cost = forms.IntegerField()
    desc = forms.CharField(max_length=800)

    def clean_user(self):
        user = self.cleaned_data['user']
        db_object = User.objects.filter(pk=user).first()

        if db_object is None:
            raise ValidationError("This user does not exist")

        print(db_object.username)

        return user

    def clean_subject(self):
        subject = self.cleaned_data['subject']
        db_object = Subject.objects.filter(pk=subject).first()

        if db_object is None:
            raise ValidationError("Subject does not exist")

        print(db_object.name)

        return subject
