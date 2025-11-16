import pandas as pd
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import AllowAny
from rest_framework.response import Response
from .models import EquipmentDataset
from django.http import HttpResponse
from reportlab.pdfgen import canvas
from io import BytesIO
import numpy as np


# -----------------------------------------------------------
# UPLOAD CSV — FULL SUMMARY + MONTHLY TRENDS
# -----------------------------------------------------------
@api_view(["POST"])
@permission_classes([AllowAny])
def upload_csv(request):
    file = request.FILES.get("file")
    if not file:
        return Response({"error": "No file uploaded"}, status=400)

    try:
        df = pd.read_csv(file)
    except Exception as e:
        return Response({"error": f"Invalid CSV: {str(e)}"}, status=400)

    # ------------------------------
    # Basic Stats
    # ------------------------------
    total_count = len(df)
    missing_values = int(df.isna().sum().sum())
    invalid_entries = 0
    valid_rows = total_count - missing_values

    # ------------------------------
    # Averages
    # ------------------------------
    averages = {
        "Flowrate": float(df["Flowrate"].mean()) if "Flowrate" in df else 0,
        "Pressure": float(df["Pressure"].mean()) if "Pressure" in df else 0,
        "Temperature": float(df["Temperature"].mean()) if "Temperature" in df else 0,
    }

    # ------------------------------
    # Monthly Trends (Generated)
    # ------------------------------
    try:
        chunks = np.array_split(df, 12)
        monthly_flowrate = [float(chunk["Flowrate"].mean()) if len(chunk) else 0 for chunk in chunks]
        monthly_pressure = [float(chunk["Pressure"].mean()) if len(chunk) else 0 for chunk in chunks]
        monthly_temperature = [float(chunk["Temperature"].mean()) if len(chunk) else 0 for chunk in chunks]
    except:
        monthly_flowrate = [0] * 12
        monthly_pressure = [0] * 12
        monthly_temperature = [0] * 12

    monthly = {
        "flowrate": monthly_flowrate,
        "pressure": monthly_pressure,
        "temperature": monthly_temperature,
    }

    # ------------------------------
    # Type Distribution
    # ------------------------------
    type_distribution = df["Type"].value_counts().to_dict() if "Type" in df else {}

    # ------------------------------
    # Final Summary (Matches Frontend SummaryType)
    # ------------------------------
    summary = {
        "valid_rows": valid_rows,
        "missing_values": missing_values,
        "invalid_entries": invalid_entries,
        "total_count": total_count,
        "averages": averages,
        "monthly": monthly,
        "type_distribution": type_distribution,
    }

    # Save in DB
    EquipmentDataset.objects.create(
        file_name=file.name,
        summary=summary
    )

    # Keep last 5 only
    all_entries = EquipmentDataset.objects.order_by("-created_at")
    if all_entries.count() > 5:
        for e in all_entries[5:]:
            e.delete()

    return Response(summary)


# -----------------------------------------------------------
# HISTORY — NOW PUBLIC (NO AUTH)
# -----------------------------------------------------------
@api_view(["GET"])
@permission_classes([AllowAny])
def history(request):
    entries = EquipmentDataset.objects.order_by("-created_at")[:5]

    data = [
        {
            "file_name": e.file_name,
            "summary": e.summary
        }
        for e in entries
    ]

    return Response(data)


# -----------------------------------------------------------
# PDF GENERATION
# -----------------------------------------------------------
@api_view(["GET"])
@permission_classes([AllowAny])
def generate_pdf(request):
    buffer = BytesIO()
    p = canvas.Canvas(buffer)

    p.drawString(100, 800, "Chemical Equipment Summary Report")

    y = 760
    for entry in EquipmentDataset.objects.order_by("-created_at")[:5]:
        p.drawString(100, y, f"{entry.file_name} : {entry.summary}")
        y -= 40

    p.showPage()
    p.save()

    buffer.seek(0)
    return HttpResponse(buffer, content_type='application/pdf')
