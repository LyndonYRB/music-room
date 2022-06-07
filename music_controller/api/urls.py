from django.urls import path
from .views import RoomView
DEBUG = True
urlpatterns = [
    path('room', RoomView.as_view()),

]
