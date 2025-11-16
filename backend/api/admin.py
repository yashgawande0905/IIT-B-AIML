from django.contrib import admin
from .models import EquipmentDataset

class EquipmentDatasetAdmin(admin.ModelAdmin):
    list_display = ("file_name", "created_at")
    ordering = ("-created_at",)

admin.site.register(EquipmentDataset, EquipmentDatasetAdmin)
