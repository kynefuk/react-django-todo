from django.shortcuts import get_object_or_404
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

from .serializers import TodoCreateSerializer, TodoSerializer
from todos.models import Todo


class TodoCreateView(APIView):
    def post(self, request, *args, **kwargs):
        serializer = TodoCreateSerializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_201_CREATED)


class TodoListView(APIView):
    def get(self, request, *args, **kwargs):
        todos = Todo.objects.all()
        serialzier = TodoSerializer(instance=todos, many=True)

        return Response(serialzier.data, status=status.HTTP_200_OK)


class TodoUpdateView(APIView):
    def patch(self, request, pk, *args, **kwargs):
        todo = get_object_or_404(Todo, pk=pk)
        serializer = TodoSerializer(instance=todo, data=request.data)
        serializer.is_valid(raise_exception=True)
        serializer.save()

        return Response(serializer.data, status=status.HTTP_200_OK)


class TodoDeleteView(APIView):
    def delete(self, request, pk, *args, **kwargs):
        todo = get_object_or_404(Todo, pk=pk)
        todo.delete()

        return Response(status=status.HTTP_204_NO_CONTENT)
