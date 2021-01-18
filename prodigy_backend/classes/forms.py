from django import forms
from django.core.exceptions import ValidationError
from accounts.models import Subject, Profile
from django.contrib.auth.models import User


class NewClassForm(forms.Form):
    teacher = forms.IntegerField()
    name = forms.CharField(max_length=64)
    subject = forms.IntegerField()
    cost = forms.DecimalField(decimal_places=2)
    desc = forms.CharField(max_length=800)

    def clean_user(self):
        user = self.cleaned_data['user']
        db_object = User.objects.filter(pk=user).first()
        profile_object = Profile.objects.filter(user=db_object)

        if profile_object is None:
            raise ValidationError("This user does not exist")

        return user

    def clean_subject(self):
        subject = self.cleaned_data['subject']
        db_object = Subject.objects.filter(pk=subject).first()

        if db_object is None:
            raise ValidationError("Subject does not exist")

        return subject
