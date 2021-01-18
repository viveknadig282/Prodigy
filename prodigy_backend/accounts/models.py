from django.db import models
from django.contrib.auth.models import User
from django.db.models import fields

# Create your models here.


class Subject(models.Model):
    name = models.CharField(max_length=64)

    def __str__(self):
        return f"{self.id}: {self.name}"


class Profile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    age = models.PositiveIntegerField()

    gender = models.BooleanField(default=True)  # true: Male, false: Female
    latest_course = models.PositiveIntegerField(default=2)
    # # 1: Math, 2: Science, 3: Engineering, 4: Social Studies, 5: Art, 6: Music
    # fields_interest = models.ForeignKey(
    #     Subject, on_delete=models.PROTECT, null=True, related_name="fields_of_interest")
    # fields_help = models.ForeignKey(
    #     Subject, on_delete=models.PROTECT, null=True, related_name="challenging_fields")
    # challenging_courses = models.BooleanField()

    # STUDY_TIME1 = 1
    # STUDY_TIME2 = 2
    # STUDY_TIME3 = 3
    # STUDY_TIME4 = 4
    # STUDY_CHOICES = [
    #     (STUDY_TIME1, '1-3 hours'),
    #     (STUDY_TIME2, '4-6 hours'),
    #     (STUDY_TIME3, '6-8 hours'),
    #     (STUDY_TIME4, '10-12 hours'),
    # ]
    # study_time = models.PositiveSmallIntegerField(choices=STUDY_CHOICES, default=1)

    # ARCHITECURE = 1
    # ARTS = 2
    # BUSINESS = 3
    # COMMS = 4
    # SOCIAL = 5
    # EDUCATION = 6
    # STEM = 7
    # CAREER_CHOICES = [
    #     (ARCHITECURE, 'Architecture and engineering'),
    #     (ARTS, 'Arts, culture, and entertainment'),
    #     (BUSINESS, 'Business, management, and administration'),
    #     (COMMS, 'Communications'),
    #     (SOCIAL, 'Community and social services'),
    #     (EDUCATION, 'Education'),
    #     (STEM, 'Science and technology')
    # ]
    # careers_interest = models.PositiveSmallIntegerField(choices=CAREER_CHOICES, default=1)
    # sports_interest = models.PositiveSmallIntegerField()

    # def get_age_category(self):
    #     if self.age < 11:
    #         return 1
    #     elif self.age >= 12 and self.age <= 17:
    #         return 2
    #     elif self.age >= 18 and self.age <= 25:
    #         return 3
    #     elif self.age >= 26 and self.age <= 35:
    #         return 4
    #     elif self.age >= 36 and self.age <= 45:
    #         return 5
    #     elif self.age >= 46 and self.age <= 55:
    #         return 6
    #     else:
    #         return 7

    # def get_gender_shifted(self):
    #     return self.gender + 7

    # def get_fields_interest_shifted(self):
    #     return self.fields_interest.id + 11

    # def get_fields_help_shifted(self):
    #     return self.fields_help.id + 17

    # def get_challenging_courses_shifted(self):
    #     return 24 if self.challenging_courses else 25

    # def get_study_time_shifted(self):
    #     return self.study_time + 25

    # def get_careers_interest_shifted(self):
    #     return self.careers_interest + 29

    # def get_sports_interest_shifted(self):
    #     return self.sports_interest + 36

    def __str__(self):
        return self.user.username
