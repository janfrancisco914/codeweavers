# website/urls.py
from django.urls import path
from . import views

urlpatterns = [
    path('index/', views.index, name='index'),
    path('contact/', views.contact, name='contact'),
    path('resume/', views.resume, name='resume'),
    path('projects/', views.projects, name='projects'),
    path('about/', views.about, name='about'),
    # other paths...
]
