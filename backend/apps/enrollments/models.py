from django.db import models
from apps.accounts.models import User
from apps.courses.models import Course


class Enrollment(models.Model):
    student = models.ForeignKey(User,on_delete=models.CASCADE)
    course = models.ForeignKey(Course,on_delete=models.CASCADE)
    enrolled_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.student.email
