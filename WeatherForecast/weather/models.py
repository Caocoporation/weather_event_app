from django.db import models
from django.contrib.auth.models import User

import random
import string
import datetime

# Create your models here.

def eventCodeGenerator():
    code = []
    characters = string.ascii_letters + string.digits
    
    while True:
        code = random.choices(population=list(characters), k=15)
        
        if code[0].isalpha():
            break
        
    return "".join(code)

class Event(models.Model):
    event_code = models.CharField(max_length=15, default=eventCodeGenerator, unique=True,  null=False)
    event_start = models.DateTimeField(null=False, auto_now_add=False, default=datetime.datetime.now())
    event_end = models.DateTimeField(null=False, auto_now_add=False, default=datetime.datetime.now())
    event_title = models.CharField(max_length=50, unique=True,  null=False)
    event_activity = models.TextField(max_length=50, unique=False,  null=False)
    user = models.ForeignKey(to=User, related_name="user_event", on_delete=models.CASCADE)

