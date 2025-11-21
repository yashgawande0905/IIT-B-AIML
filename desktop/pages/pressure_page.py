from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel
from utils.plot_canvas import PlotCanvas
from styles.theme import CHART_COLOR_PRESSURE, GRID_COLOR, TITLE_COLOR

class PressurePage(QWidget):
    def __init__(self, api_data):
        super().__init__()

        layout = QVBoxLayout(self)

        title = QLabel("⚙ Monthly Pressure Trend")
        title.setStyleSheet(f"font-size: 22px; font-weight: bold; color: {TITLE_COLOR}")
        layout.addWidget(title)

        canvas = PlotCanvas()
        layout.addWidget(canvas)

        if not api_data:
            return

        monthly = api_data["summary"]["monthly"]["pressure"]
        months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

        canvas.ax.plot(months, monthly,
                       marker="o",
                       linewidth=3,
                       markersize=8,
                       color=CHART_COLOR_PRESSURE)

        canvas.ax.grid(color=GRID_COLOR, linestyle="--")
        canvas.ax.set_ylabel("Pressure")
        canvas.ax.set_title("Pressure Trend", color=TITLE_COLOR)
        canvas.draw()
