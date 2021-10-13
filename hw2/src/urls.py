from django.urls import path
from .views import Index2,showAllPage,add
from rest_framework import routers, serializers, viewsets

urlpatterns = [
    path('<str:name>/<int:age>', Index2.as_view(), name='index'),
    path('add/<str:name>/<int:price>', add.as_view(), name='showAll')
]