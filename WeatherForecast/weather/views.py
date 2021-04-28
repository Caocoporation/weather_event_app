# from django.shortcuts import render
# from django.http import HttpResponse

from rest_framework import generics, status, permissions, viewsets
from .serializers import EventSerializer
from rest_framework.views import APIView
from rest_framework.response import Response
from .models import Event, User
import datetime

# Create your views here.

class FetchEvent(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def get(self, request):
        if request.method == "GET":
            events = Event.objects.all()
            data = self.serializer_class(events, many=True).data

            return Response({"data": data}, status.HTTP_200_OK)

        return Response({"message": "bad request"}, status=status.HTTP_400_BAD_REQUEST)        


class AddEvent(APIView):
    permission_classes = [permissions.AllowAny]
    serializer_class = EventSerializer
    queryset = Event.objects.all()

    def post(self, request):
        if request.method == "POST":
            print("It is working!")

            print(f"request data {request.data}")

            event_start = datetime.datetime.fromtimestamp(int(request.data.get("event_start", None))).strftime("%Y-%m-%dT%H:%M:%S.%fZ")
            event_end = datetime.datetime.fromtimestamp(int(request.data.get("event_end", None))).strftime("%Y-%m-%dT%H:%M:%S.%fZ")

            data = request.data.copy()
            data["event_start"] = event_start
            data["event_end"] = event_end
            data["user"] = User.objects.get(id=1)

            event = EventSerializer(data=data)

            if event.is_valid():
                insert_event = Event(**data).save()

                return Response({"data": event.data}, status=status.HTTP_201_CREATED)

            else:
                return Response({"data": event.errors}, status=status.HTTP_203_NON_AUTHORITATIVE_INFORMATION)

        return Response({"message": "bad request"}, status=status.HTTP_400_BAD_REQUEST)        