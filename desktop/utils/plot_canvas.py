from matplotlib.backends.backend_qt5agg import FigureCanvasQTAgg
from matplotlib.figure import Figure

class PlotCanvas(FigureCanvasQTAgg):
    def __init__(self, parent=None):
        self.fig = Figure(figsize=(6,4), facecolor="white")
        self.ax = self.fig.add_subplot(111)
        super().__init__(self.fig)

    def reset(self):
        self.ax.clear()
        self.draw()
