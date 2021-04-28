# from django.shortcuts import render
# from django.http import HttpResponse

from rest_framework import generics, status, permissions, viewsets
from .serializers import UserSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth.models import User
from django.contrib.auth import login, logout, authenticate

# Create your views here.

class LoginUser(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def user_authentication(self, request):
        user = authenticate(request=request, **request.data)
        return user

    def post(self, request):
        if request.method == "POST":        
            user = self.user_authentication(request)
            data = self.serializer_class(user).data
            
            if user is not None:
                return Response({"message": "Login successfully!", "user": data}, status=status.HTTP_200_OK)
      
            return Response({"message": "Invalid username or password"}, status=status.HTTP_404_NOT_FOUND)

        return Response({"message": "Oops"}, status=status.HTTP_400_BAD_REQUEST)

class RegisterUser(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = UserSerializer
    queryset = User.objects.all()

    def post(self, request):
        user = self.serializer_class(data=request.data)
        
        if user.is_valid():
            insert_user = user.save()

            return Response(data={"message": "Register successfully!", "data": user.data}, status=status.HTTP_201_CREATED)
        
        else: 
            return Response(data={"data": user.errors}, status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)

        return Response({"message": "Error occur !"}, status=status.HTTP_400_BAD_REQUEST)

        