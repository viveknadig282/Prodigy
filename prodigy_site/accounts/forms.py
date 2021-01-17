from django import forms
from django.contrib.auth.password_validation import validate_password


class ProfileCreationForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(label='Your password', max_length=100)
    email = forms.EmailField(label='Your email')
    age = forms.IntegerField(label='Your age')
    gender = forms.BooleanField(label='Your gender')

    def clean_password(self):
        valid = validate_password(
            self.cleaned_data['password'], user=self.cleaned_data['username'])
        return valid


class ProfileForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(label='Your password', max_length=100)
