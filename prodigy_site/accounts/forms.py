from django import forms


class ProfileForm(forms.Form):
    username = forms.CharField(label='Your username', max_length=100)
    password = forms.CharField(label='Your password', max_length=100)
    email = forms.EmailField()
    # age =
    gender = forms.CharField(label='Your gender', max_length=100)
