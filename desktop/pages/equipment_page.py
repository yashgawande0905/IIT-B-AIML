from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel
from utils.plot_canvas import PlotCanvas
from styles.theme import CHART_COLOR_EQUIPMENT, GRID_COLOR, TITLE_COLOR

class EquipmentPage(QWidget):
    def __init__(self, api_data):
        super().__init__()

        layout = QVBoxLayout(self)

        title = QLabel("🧩 Equipment Type Distribution")
        title.setStyleSheet(f"font-size: 22px; font-weight: bold; color: {TITLE_COLOR}")
        layout.addWidget(title)

        canvas = PlotCanvas()
        layout.addWidget(canvas)

        if not api_data:
            return

        dist = api_data["summary"]["type_distribution"]

        keys = list(dist.keys())
        vals = list(dist.values())

        canvas.ax.bar(keys, vals, color=CHART_COLOR_EQUIPMENT)
        canvas.ax.grid(axis="y", color=GRID_COLOR, linestyle="--")
        canvas.ax.set_title("Equipment Distribution", color=TITLE_COLOR)
        canvas.ax.set_ylabel("Count")
        canvas.draw()
