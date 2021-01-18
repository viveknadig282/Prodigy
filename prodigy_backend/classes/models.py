from django.db import models
from accounts.models import Profile, Subject
from django.core.validators import MaxValueValidator, MinValueValidator


class Class(models.Model):
    name = models.CharField(max_length=64)
    subject = models.ForeignKey(Subject, on_delete=models.PROTECT, null=True)
    teacher = models.ForeignKey(Profile, on_delete=models.CASCADE)
    desc = models.CharField(max_length=800)
    cost = models.DecimalField(max_digits=8, decimal_places=2)

    def __str__(self):
        return f"{self.name} by {self.teacher.user.username} for ${self.cost}"

# {
#     "name": "NAME OF CLASS",
#     "subject": "SUBJECT OBJECT: MATH, SCIENCE",
#     "teacher": "PROFILE OBJECT",
#     "desc": "800 CHAR DESC OF CLASS",
#     "cost": "COST IN DOLLARS"
# }


class Review(models.Model):
    text = models.CharField(max_length=1000)
    rating = models.DecimalField(max_digits=2, decimal_places=1,
                                 validators=[
                                     MaxValueValidator(5),
                                     MinValueValidator(0)
                                 ]
                                 )
    class_for = models.ForeignKey(Class, on_delete=models.CASCADE)
    user_for = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='user_reviewed')
    author = models.ForeignKey(
        Profile, on_delete=models.CASCADE, related_name='user_author', null=True)

    def __str__(self):
        return f"Review from {self.author.user.username}: {self.rating} stars"
