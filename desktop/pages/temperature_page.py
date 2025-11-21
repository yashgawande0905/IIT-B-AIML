from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel
from utils.plot_canvas import PlotCanvas
from styles.theme import CHART_COLOR_TEMPERATURE, GRID_COLOR, TITLE_COLOR

class TemperaturePage(QWidget):
    def __init__(self, api_data):
        super().__init__()

        layout = QVBoxLayout(self)

        title = QLabel("🌡 Monthly Temperature Trend")
        title.setStyleSheet(f"font-size: 22px; font-weight: bold; color: {TITLE_COLOR}")
        layout.addWidget(title)

        canvas = PlotCanvas()
        layout.addWidget(canvas)

        if not api_data:
            return

        monthly = api_data["summary"]["monthly"]["temperature"]
        months = ["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"]

        canvas.ax.plot(months, monthly,
                       marker="o",
                       linewidth=3,
                       markersize=8,
                       color=CHART_COLOR_TEMPERATURE)

        canvas.ax.grid(color=GRID_COLOR, linestyle="--")
        canvas.ax.set_ylabel("Temperature")
        canvas.ax.set_title("Temperature Trend", color=TITLE_COLOR)
        canvas.draw()
