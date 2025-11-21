from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel, QHBoxLayout, QFrame
from styles.theme import CARD_STYLE, TITLE_COLOR

class SummaryPage(QWidget):
    def __init__(self, api_data):
        super().__init__()
        layout = QVBoxLayout(self)

        title = QLabel("📊 Summary Statistics")
        title.setStyleSheet(f"font-size: 22px; font-weight: bold; color: {TITLE_COLOR}")
        layout.addWidget(title)

        if not api_data:
            layout.addWidget(QLabel("No data loaded yet. Upload a CSV."))
            return

        summary = api_data["summary"]

        # Stat cards
        def make_card(label, value):
            card = QFrame()
            card.setStyleSheet("""
                background: #F3F4F6;
                border-radius: 12px;
                padding: 15px;
            """)
            v = QVBoxLayout(card)
            t1 = QLabel(label)
            t1.setStyleSheet("font-size: 14px;")
            t2 = QLabel(str(value))
            t2.setStyleSheet("font-size: 20px; font-weight: bold;")
            v.addWidget(t1)
            v.addWidget(t2)
            return card

        row1 = QHBoxLayout()
        row1.addWidget(make_card("Total Rows", summary["total_count"]))
        row1.addWidget(make_card("Valid Rows", summary["valid_rows"]))
        row1.addWidget(make_card("Missing Values", summary["missing_values"]))
        row1.addWidget(make_card("Invalid Entries", summary["invalid_entries"]))
        layout.addLayout(row1)

        layout.addSpacing(20)

        # Averages
        avg = summary["averages"]
        row2 = QHBoxLayout()
        row2.addWidget(make_card("Avg Flowrate", round(avg["Flowrate"], 2)))
        row2.addWidget(make_card("Avg Pressure", round(avg["Pressure"], 2)))
        row2.addWidget(make_card("Avg Temperature", round(avg["Temperature"], 2)))
        layout.addLayout(row2)
