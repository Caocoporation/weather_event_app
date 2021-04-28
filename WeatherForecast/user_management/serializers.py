from rest_framework import serializers
from django.contrib.auth.models import User
from rest_framework.serializers import (
    ValidationError, 
    SerializerMethodField, 
    HyperlinkedModelSerializer
)

class UserSerializer(serializers.ModelSerializer):
    '''
        AttributeError when attempting to get a value for field `password2` on serializer `UserCreateSerializer`.
        The serializer field might be named incorrectly and not match any attribute or key on the `User` instance.
        Original exception text was: 'User' object has no attribute 'password2'.

        Add write_only attribute in password2 field, password2 field is just a dummy field used to 
        compare password fields together, so it's unnecessary
    '''

    password2 = serializers.CharField(
        required=True, 
        label="Confirmed Password",      
        write_only=True
    )

    class Meta:
        model = User
        fields = "__all__"
        depth = 2

    def validate_password2(self, value):
        data = self.get_initial()
        password2 = data.get("password2", None)
        password = data.get("password", None)

        if password2 != password:
            raise ValidationError("Password doesn't match", code="15203")

        pass

    def create(self, validated_data):
        _validated_data = validated_data.copy()
        _validated_data.pop("password2")
        
        user_object = User(**_validated_data)
        user_object.set_password(_validated_data["password"])
        user_object.save()

        return _validated_data
        # return super().create(_validated_data)

        