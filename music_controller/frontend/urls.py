
from django.urls import path, include
from .views import index
DEBUG = True
urlpatterns = [
    path('', index)
]
