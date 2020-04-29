from rest_framework import serializers

from todos.models import Todo


class TodoCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        exclude = ["id"]


class TodoSerializer(serializers.ModelSerializer):
    class Meta:
        model = Todo
        fields = "__all__"
