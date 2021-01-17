from django import forms
from django.contrib.auth.password_validation import validate_password
from django.contrib.auth.models import User
from django.core.exceptions import ValidationError


class ProfileCreationForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(
        label='Your password', widget=forms.PasswordInput, max_length=100)
    email = forms.EmailField(label='Your email')
    age = forms.IntegerField(label='Your age')
    gender = forms.BooleanField(label='Your gender')

    def clean_username(self):
        username = self.cleaned_data['username']
        if username is None:
            raise ValidationError("This field is required")

        users = User.objects.filter(username=self.cleaned_data['username'])
        if len(users) >= 1:
            raise ValidationError("A user with this username already exists")

        return username

    def clean_password(self):
        password = self.cleaned_data['password']

        if password is None:
            raise ValidationError("This field is required")

        validate_password(password=password)

        return password


class ProfileForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(label='Your password', max_length=100)
