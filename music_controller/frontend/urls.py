
from django.urls import path
from .views import index
#DEBUG = True
urlpatterns = [
    path('', index),
    path('join', index),
    path('create', index)
]
