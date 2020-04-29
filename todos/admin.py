from django.contrib import admin
from django.apps import apps

todos = apps.get_app_config("todos")

# for model in todos.models.values():
for model in todos.get_models():
    admin.site.register(model)
