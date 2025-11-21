import os

os.environ["QTWEBENGINE_CHROMIUM_FLAGS"] = "--disable-web-security --ignore-certificate-errors --disable-site-isolation-trials"
os.environ["QT_QPA_PLATFORM"] = "windows:fontengine=freetype"

from PyQt5.QtWidgets import QApplication
from main_window import MainWindow

def main():
    app = QApplication([])
    window = MainWindow()
    window.show()
    app.exec_()

if __name__ == "__main__":
    main()
