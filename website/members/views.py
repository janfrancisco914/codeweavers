from django.http import HttpResponse
from django.template import loader
from django.shortcuts import render


def members(request):
  template = loader.get_template('index.html')
  return HttpResponse(template.render())

def index(request):
    return render(request, 'index.html')

def customize(request):
    return render(request, 'customize.html')

def contact(request):
    return render(request, 'contact.html')

def about(request):
    return render(request, 'about.html') 

def services(request):
    return render(request, 'services.html') 