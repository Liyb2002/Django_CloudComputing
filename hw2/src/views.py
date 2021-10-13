from django.shortcuts import render
from django.http import HttpResponse
from django.views.generic import View
from src.models import Test, Transactions
from datetime import datetime

#Seriliazer stuffs
from django.contrib.auth.models import User, Group
from rest_framework import viewsets
from rest_framework import permissions
from .serializers import UserSerializer, GroupSerializer, TransactionSerializer

# Create your views here.


class Index2(View):
    def get(self, request, name, age):
        test1 = Test.objects.get(id=1)

        return HttpResponse('hello i am {0}, age is {1}, id is {2}'.format(name, age, test1.age))

class add(View):
    def get(self, request, name, price):
        this_transaction = Transactions.objects.create(
            name=name, price=price)
        return HttpResponse('new transaction created')


class showAllPage(viewsets.ModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

#Serializer
class UserViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows users to be viewed or edited.
    """
    queryset = User.objects.all().order_by('-date_joined')
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]


class GroupViewSet(viewsets.ModelViewSet):
    """
    API endpoint that allows groups to be viewed or edited.
    """
    queryset = Group.objects.all()
    serializer_class = GroupSerializer
    permission_classes = [permissions.IsAuthenticated]