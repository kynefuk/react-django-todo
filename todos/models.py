import uuid

from django.db import models


class Todo(models.Model):
    class Meta:
        db_table = "todos"

    id = models.UUIDField(primary_key=True, default=uuid.uuid4)
    title = models.CharField(verbose_name="タイトル", max_length=20)
    done = models.BooleanField(verbose_name="完了済み", default=False)

    def __str__(self):
        return self.title
