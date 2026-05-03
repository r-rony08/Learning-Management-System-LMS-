from django.urls import path
from .views import RegisterView,LoginView,ProfileView, AdminDashboardView, InstructorDashboardView, StudentDashboardView

urlpatterns = [
    path("register/",RegisterView.as_view()),
    path("login/",LoginView.as_view()),
    path("profile/",ProfileView.as_view()),

    path("admin-dashboard/",AdminDashboardView.as_view()),
    path("instructor-dashboard/",InstructorDashboardView.as_view()),
    path("student-dashboard/",StudentDashboardView.as_view()),
]