🔬 IIT Bombay – Chemical Equipment Parameter Visualizer
Hybrid Web + Desktop Application (React + Django + Tailwind CSS)

This project is a complete data visualization and analytics dashboard designed for chemical engineering datasets.
Built as part of the IIT Bombay AI/ML program, it allows users to upload CSV files and instantly view:

Equipment type distribution

Monthly flowrate, pressure, and temperature trends

Data quality scoring

Summary statistics

Interactive charts & tables

The project integrates a React + Tailwind CSS frontend with a Django REST Framework backend, customized on top of the TailAdmin template.

📊 Features
✔ CSV Upload (Chemical Equipment Dataset)

Upload a CSV file containing equipment parameters such as:

Flowrate

Pressure

Temperature

Timestamp

Equipment Type

The system automatically processes and cleans the data.

✔ Real-Time Summary Statistics

The backend computes:

Total rows

Valid rows

Missing values

Invalid entries

Averages of all key parameters

Equipment type distribution

These metrics update instantly after each upload.

✔ Data Quality Score (Radial Gauge)

A live radial chart displays the percentage quality of the uploaded dataset.

✔ Monthly Trend Charts

Using ApexCharts, the dashboard shows:

📈 Monthly Flowrate trend

🌡 Monthly Temperature trend

⚙ Monthly Pressure trend

Each analysis has its own dedicated page in the sidebar.

✔ IIT Bombay Branding

The UI has been redesigned to remove the TailAdmin branding and replace it with the official IIT Bombay logo, visible in:

Sidebar

Mobile header

Navigation

✔ Dark Mode Support

Built-in dark/light theme toggle.

✔ Backend: Django REST Framework

Backend endpoints:

Endpoint	Method	Description
/api/upload/	POST	Upload CSV & generate summary
/api/history/?latest=true	GET	Fetch latest processed dataset
/api/history/	GET	Fetch all dataset history
✔ Frontend: React + Tailwind

Custom charts & cards

Sidebar navigation

Live state management using Zustand

Responsive layout

File uploader

PDF generation page

📂 Tech Stack
Frontend

React 19

TypeScript

Tailwind CSS

ApexCharts

Zustand state management

Vite

Backend

Django

Django REST Framework

Pandas

SQLite

🚀 Getting Started
🔧 Backend Setup (Django)
cd backend
python -m venv venv
venv\Scripts\activate   # Windows
pip install -r requirements.txt
python manage.py migrate
python manage.py runserver


Backend will run on:

http://127.0.0.1:8000

🎨 Frontend Setup (React)
cd frontend
npm install
npm run dev


Frontend runs on:

http://localhost:5173

📁 Project Structure
IIT-B-AIML/
│
├── backend/
│   ├── api/
│   ├── chemvis_backend/
│   ├── db.sqlite3
│   └── manage.py
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── vite.config.ts
│
└── README.md

🎓 Developed For

Indian Institute of Technology Bombay
AI & Machine Learning Program

⭐ Support

If you find this project useful, feel free to star the repository on GitHub!

📝 License

This project is licensed under the MIT License.