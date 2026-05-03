
from django.contrib import admin
from django.urls import path, include
from rest_framework_simplejwt.views import TokenRefreshView
from django.conf import settings   
from django.conf.urls.static import static

urlpatterns = [
    path('admin/', admin.site.urls),
    path("api/token/refresh/",TokenRefreshView.as_view(),name="token_refresh",),
    path("api/auth/",include("apps.accounts.urls")),
    path("api/",include("apps.courses.urls")),
    path("api/", include("apps.enrollments.urls")),
    path("api/dashboard/", include("apps.dashboard.urls")),
]

urlpatterns += static(settings.MEDIA_URL,document_root=settings.MEDIA_ROOT)