from PyQt5.QtWidgets import QApplication, QMainWindow
from PyQt5.QtWebEngineWidgets import QWebEngineView
from PyQt5.QtWebEngineWidgets import QWebEngineSettings
from PyQt5.QtCore import QUrl

class MainWindow(QMainWindow):
    def __init__(self):
        super().__init__()

        self.browser = QWebEngineView()

        # --- ENABLE FULL FEATURES SO REACT STYLES LOAD CORRECTLY ---
        settings = self.browser.settings()
        settings.setAttribute(QWebEngineSettings.JavascriptEnabled, True)
        settings.setAttribute(QWebEngineSettings.PluginsEnabled, True)
        settings.setAttribute(QWebEngineSettings.LocalContentCanAccessRemoteUrls, True)
        settings.setAttribute(QWebEngineSettings.LocalContentCanAccessFileUrls, True)
        settings.setAttribute(QWebEngineSettings.AutoLoadImages, True)
        settings.setAttribute(QWebEngineSettings.JavascriptCanOpenWindows, True)
        settings.setAttribute(QWebEngineSettings.JavascriptCanAccessClipboard, True)

        # --- Load React Dev Server ---
        self.browser.load(QUrl("http://localhost:5173"))

        self.setCentralWidget(self.browser)
        self.setWindowTitle("Chemical Equipment Visualizer")
        self.resize(1400, 900)

app = QApplication([])
window = MainWindow()
window.show()
app.exec_()
