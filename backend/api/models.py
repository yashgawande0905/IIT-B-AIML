from django.db import models
from django.contrib.auth.models import User
import json

class EquipmentDataset(models.Model):
    file_name = models.CharField(max_length=255)
    summary = models.JSONField()
    created_at = models.DateTimeField(auto_now_add=True)

    def __str__(self):
        return self.file_name
