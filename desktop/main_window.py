import base64
from PyQt5.QtWidgets import *
from PyQt5.QtGui import QPixmap
from PyQt5.QtCore import Qt

from api_client import upload_csv, latest
from pages.summary_page import SummaryPage
from pages.flowrate_page import FlowratePage
from pages.temperature_page import TemperaturePage
from pages.pressure_page import PressurePage
from pages.equipment_page import EquipmentPage
from styles.theme import *


# ================================
# IIT Bombay logo embedded as Base64
# ================================
IITB_LOGO = """
CHiS6qofGtNakYNabdsz1NziM9m3EBrXelnbTlTZ7N6i9fGSIPgvgd8/yfGRnq1s...sI6vta9/38AAAD//6lVXagAAAAGSURBVAMAmNOnl850BYUAAAAASUVORK5CYII=
""".strip()


class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.setWindowTitle("IIT Bombay - Chemical Equipment Dashboard (Desktop)")
        self.resize(1300, 850)

        self.api_data = None

        # LAYOUT ROOT
        root = QHBoxLayout()
        container = QWidget()
        container.setLayout(root)
        self.setCentralWidget(container)

        # ================================
        # SIDEBAR (Left Navigation)
        # ================================
        sidebar = QWidget()
        sidebar.setFixedWidth(260)
        sidebar.setStyleSheet(f"background-color: {SIDEBAR_BG};")
        side_layout = QVBoxLayout(sidebar)

        # ---------- Logo ----------
        logo_label = QLabel()
        pixmap = QPixmap("assets/iitb_logo.png")
        pixmap = pixmap.scaled(130, 130, Qt.KeepAspectRatio, Qt.SmoothTransformation)
        logo_label.setPixmap(pixmap)
        logo_label.setAlignment(Qt.AlignCenter)
        side_layout.addWidget(logo_label)

        # ---------- Menu Title ----------
        title = QLabel("MENU")
        title.setStyleSheet(f"color: {SIDEBAR_TEXT}; font-size: 13px; margin: 20px 10px;")
        side_layout.addWidget(title)

        # Utility function to add sidebar buttons
        def add_button(text):
            btn = QPushButton(text)
            btn.setStyleSheet(f"""
                QPushButton {{
                    color: {SIDEBAR_TEXT};
                    background-color: transparent;
                    border: none;
                    font-size: 15px;
                    padding: 12px;
                    text-align: left;
                }}
                QPushButton:hover {{
                    background-color: {SIDEBAR_HIGHLIGHT};
                    color: white;
                }}
            """)
            side_layout.addWidget(btn)
            return btn

        # Navigation buttons
        btn_dashboard = add_button("📊 Summary Dashboard")
        btn_upload = add_button("📤 Upload CSV File")
        btn_flowrate = add_button("📈 Flowrate Analysis")
        btn_pressure = add_button("⚙ Pressure Analysis")
        btn_temperature = add_button("🌡 Temperature Analysis")
        btn_equipment = add_button("🧩 Equipment Distribution")

        side_layout.addStretch()

        # ================================
        # PAGE AREA (Right Side Content)
        # ================================
        self.page_area = QVBoxLayout()
        self.page_area.setContentsMargins(20, 20, 20, 20)

        root.addWidget(sidebar)
        root.addLayout(self.page_area)

        # ================================
        # Button Actions
        # ================================

        btn_upload.clicked.connect(self.handle_upload)

        btn_dashboard.clicked.connect(lambda: self.show_page(SummaryPage(self.api_data)))
        btn_flowrate.clicked.connect(lambda: self.show_page(FlowratePage(self.api_data)))
        btn_temperature.clicked.connect(lambda: self.show_page(TemperaturePage(self.api_data)))
        btn_pressure.clicked.connect(lambda: self.show_page(PressurePage(self.api_data)))
        btn_equipment.clicked.connect(lambda: self.show_page(EquipmentPage(self.api_data)))


    # ================================
    # CSV Upload Handler
    # ================================
    def handle_upload(self):
        file_path, _ = QFileDialog.getOpenFileName(self, "Select CSV File", "", "CSV Files (*.csv)")

        if file_path:
            # Upload CSV → backend processes it
            upload_resp = upload_csv(file_path)

            # Fetch latest processed dataset
            data = latest()

            print("DEBUG: API payload loaded.")
            self.api_data = data

            # Show summary page
            self.show_page(SummaryPage(self.api_data))


    # ================================
    # Switch Page
    # ================================
    def show_page(self, widget):
        # Clear old widgets
        for i in reversed(range(self.page_area.count())):
            w = self.page_area.itemAt(i).widget()
            if w:
                w.deleteLater()

        # Add new page widget
        self.page_area.addWidget(widget)
