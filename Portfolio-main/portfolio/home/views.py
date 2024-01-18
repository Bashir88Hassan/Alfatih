from django.shortcuts import render
from . models import *

# Create your views here.

def index(requst):
    context = {
        'skills' : Skills.objects.all(),
        'servies': Servies.objects.all(),
    }
    return render(requst, 'pages/index.html', context)
