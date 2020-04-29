from django.urls import path

from . import views

urlpatterns = [
    path("todos/", views.TodoListView.as_view()),
    path("todo/create/", views.TodoCreateView.as_view()),
    path("todo/update/<uuid:pk>/", views.TodoUpdateView.as_view()),
    path("todo/delete/<uuid:pk>/", views.TodoDeleteView.as_view()),
]
