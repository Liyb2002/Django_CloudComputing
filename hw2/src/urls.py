from django.urls import path
from .views import Index2,showAllPage,add

urlpatterns = [
    path('<str:name>/<int:age>', Index2.as_view(), name='index'),
    path('showall', showAllPage.as_view(), name='showAll'),
    path('add/<str:name>/<int:price>', add.as_view(), name='showAll')
]