from PyQt5.QtWidgets import QWidget, QVBoxLayout, QLabel
from utils.plot_canvas import PlotCanvas

class DashboardPage(QWidget):
    def __init__(self, data):
        super().__init__()

        layout = QVBoxLayout()
        self.setLayout(layout)

        layout.addWidget(QLabel("Equipment Distribution"))

        canvas = PlotCanvas(self)
        layout.addWidget(canvas)

        if data is not None:
            eq_counts = data['Equipment Type'].value_counts()
            canvas.ax.bar(eq_counts.index, eq_counts.values)
            canvas.ax.set_title("Equipment Type Distribution")
            canvas.draw()
