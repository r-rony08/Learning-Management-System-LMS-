from rest_framework import generics
from .models import User
from .serializers import RegisterSerializer
from rest_framework_simplejwt.views import TokenObtainPairView
from rest_framework.views import APIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from .permissions import IsAdmin, IsInstructor, IsStudent, IsAdminOrInstructor, IsOwnerOrAdmin 


class RegisterView(generics.CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer

class LoginView(TokenObtainPairView):
    # serializer_class = RegisterSerializer
    pass

class ProfileView(APIView):
    permission_classes = [IsAuthenticated]

    def get(self, request):
        return Response({
            "email": request.user.email,
            "role": request.user.role
        })
    
class AdminDashboardView(APIView):
    permission_classes = [IsAuthenticated,IsAdmin]

    def get(self, request):
        return Response({
            "message": "Admin only access"
        })
    
class InstructorDashboardView(APIView):
    permission_classes = [IsAuthenticated,IsInstructor]

    def get(self, request):
        return Response({
            "message": "Instructor only access"
        })
    
class StudentDashboardView(APIView):
    permission_classes = [IsAuthenticated,IsStudent]

    def get(self, request):
        return Response({
            "message": "Student only access"
        })