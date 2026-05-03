from rest_framework.views import APIView
from rest_framework.response import Response
from apps.accounts.models import User
from apps.courses.models import Course
from apps.enrollments.models import Enrollment


class DashboardSummaryView(APIView):
    def get(self, request):
        return Response({
            "total_users": User.objects.count(),
            "total_courses": Course.objects.count(),
            "total_enrollments": Enrollment.objects.count(),
            "admins": User.objects.filter(
                role="admin"
            ).count(),
            "instructors": User.objects.filter(
                role="instructor"
            ).count(),
            "students": User.objects.filter(
                role="student"
            ).count(),
        })
