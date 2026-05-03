from django.urls import path
from .views import *

urlpatterns = [
    path("categories/", CategoryListView.as_view()),
    path("categories/create/", CategoryCreateView.as_view()),
    path("categories/<int:pk>/update/",CategoryUpdateView.as_view()),
    path("categories/<int:pk>/delete/",CategoryDeleteView.as_view()),

    path("courses/", CourseListView.as_view()),
    path("courses/create/", CourseCreateView.as_view()),
    path("courses/<int:pk>/", CourseDetailView.as_view()),
    path("courses/<int:pk>/update/",CourseUpdateView.as_view()),
    path("courses/<int:pk>/delete/",CourseDeleteView.as_view()),
]