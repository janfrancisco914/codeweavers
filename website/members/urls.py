from django.urls import path
from . import views

urlpatterns = [
    path('members/', views.members, name='members'),
    path('contact/', views.contact, name='contact'),
    path('customize/', views.customize, name='customize'),
    path('about/', views.about, name='about'),
    path('services/', views.services, name='services'),
    path('index/', views.index, name='index'),
    path('homepage/', views.homepage, name='homepage'),
    path('login/', views.login, name='login'),
]
