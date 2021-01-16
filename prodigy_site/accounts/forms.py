from django import forms


class NewProfileForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(label='Your password', max_length=100)
    email = forms.EmailField(label='Your email')
    age = forms.IntegerField(label='Your age')
    gender = forms.CharField(label='Your gender', max_length=100)

class ProfileForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(label='Your password', max_length=100) 
