from django.urls import path
from .views import *

urlpatterns = [
    path("enrollments/",EnrollmentCreateView.as_view()),
    path("enrollments/my/",MyEnrollmentView.as_view()),
]