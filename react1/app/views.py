from datetime import datetime
from rest_framework.response import Response
from .serializers import UserSerializer

from django.shortcuts import render, redirect, reverse
from django.http import HttpResponse
from django.views.generic import View
from rest_framework.views import APIView
from rest_framework import generics

from django.contrib.auth.hashers import make_password
from django.contrib.auth.models import User, Permission
from django.contrib.auth import login, logout, authenticate


class UserList(generics.ListCreateAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()


class UserDetail(generics.RetrieveUpdateDestroyAPIView):
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def put(self, request, *args, **kwargs):
        return self.patch(request, *args, **kwargs)

class MainPage(View):
    def get(self, request):
        return HttpResponse("mainpage")
