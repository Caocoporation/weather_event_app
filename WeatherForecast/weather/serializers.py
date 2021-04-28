from rest_framework import serializers
from .models import Event
from rest_framework.serializers import ValidationError

# def validate_event_title(value):
#     print(value)


#     raise ValidationError("Cannot be empty")

class EventSerializer(serializers.ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        depth = 2
        # extra_kwargs = {
        #     "event_title": {'validators': [validate_event_title]}
        # }

    # def validate(self, data):
    #     print(data["event_title"])

    #     if data["event_title"] != "hello":
    #         raise ValidationError("Wrong input")

    #     return data["event_title"]

    def validate_event_title(self, value):
        print("Went throught")
        data = self.get_initial()
        event_title = data.get("event_title", None)
        
        if event_title == "" or event_title is None:
            raise ValidationError(detail="Title cannot be empty")

        return value

    # def validate_event_activity(self, value):
    #     data = self.get_initial()
    #     event_activity = data.get("event_activity", None)

    #     if event_activity == "" or event_activity is None:
    #         raise ValidationError(detail="Activity cannot be empty")

    #     return value

    def create(self, validated_data):
        _validated_data = validated_data.copy()
        print(_validated_data["event_start"])

        return super().create(validated_data)