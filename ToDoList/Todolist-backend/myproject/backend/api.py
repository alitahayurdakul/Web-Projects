from backend.models import Backend
from rest_framework import viewsets, permissions
from .serializers import BackendSerializer

class BackendViewSet(viewsets.ModelViewSet):
    queryset = Backend.objects.all()
    permission_classes = [
        permissions.AllowAny
    ]
    serializer_class= BackendSerializer