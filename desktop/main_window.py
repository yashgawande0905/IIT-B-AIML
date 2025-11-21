from PyQt5.QtWidgets import QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtCore import QUrl

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.browser = QWebEngineView()

        # Load your React dashboard
        self.browser.load(QUrl("http://localhost:5173/"))

        self.setCentralWidget(self.browser)
        self.setWindowTitle("Chemical Equipment Dashboard")
        self.resize(1200, 800)
