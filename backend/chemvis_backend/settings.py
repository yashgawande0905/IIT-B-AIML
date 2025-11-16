from pathlib import Path
import os

BASE_DIR = Path(__file__).resolve().parent.parent

SECRET_KEY = "django-insecure-1234567890"

DEBUG = True
ALLOWED_HOSTS = ["*", "127.0.0.1", "localhost"]

# ------------------------------------------------------
# APPLICATIONS
# ------------------------------------------------------
INSTALLED_APPS = [
    "django.contrib.admin",
    "django.contrib.auth",
    "django.contrib.contenttypes",
    "django.contrib.sessions",
    "django.contrib.messages",
    "django.contrib.staticfiles",

    # Third-party
    "rest_framework",
    "corsheaders",   # <-- REQUIRED FOR CORS

    # Local apps
    "api",
]

# ------------------------------------------------------
# REST FRAMEWORK
# ------------------------------------------------------
REST_FRAMEWORK = {
    "DEFAULT_AUTHENTICATION_CLASSES": [
        "rest_framework.authentication.BasicAuthentication",
    ],
    "DEFAULT_PERMISSION_CLASSES": [
        "rest_framework.permissions.IsAuthenticated",
    ],
}

# ------------------------------------------------------
# MIDDLEWARE
# ------------------------------------------------------
MIDDLEWARE = [
    "corsheaders.middleware.CorsMiddleware",  # <-- MUST BE AT TOP (after security)
    "django.middleware.security.SecurityMiddleware",
    "django.contrib.sessions.middleware.SessionMiddleware",
    "django.middleware.common.CommonMiddleware",
    "django.middleware.csrf.CsrfViewMiddleware",
    "django.contrib.auth.middleware.AuthenticationMiddleware",
    "django.contrib.messages.middleware.MessageMiddleware",
    "django.middleware.clickjacking.XFrameOptionsMiddleware",
]

ROOT_URLCONF = "chemvis_backend.urls"

# ------------------------------------------------------
# TEMPLATES (For React Build)
# ------------------------------------------------------
FRONTEND_DIR = os.path.join(BASE_DIR, "..", "frontend", "dist")

TEMPLATES = [
    {
        "BACKEND": "django.template.backends.django.DjangoTemplates",
        "DIRS": [
            FRONTEND_DIR,
        ],
        "APP_DIRS": True,
        "OPTIONS": {
            "context_processors": [
                "django.template.context_processors.debug",
                "django.template.context_processors.request",
                "django.contrib.auth.context_processors.auth",
                "django.contrib.messages.context_processors.messages",
            ],
        },
    },
]

WSGI_APPLICATION = "chemvis_backend.wsgi.application"

# ------------------------------------------------------
# DATABASE
# ------------------------------------------------------
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.sqlite3",
        "NAME": BASE_DIR / "db.sqlite3",
    }
}

# ------------------------------------------------------
# INTERNATIONALIZATION
# ------------------------------------------------------
LANGUAGE_CODE = "en-us"
TIME_ZONE = "Asia/Kolkata"
USE_I18N = True
USE_TZ = True

# ------------------------------------------------------
# STATIC FILES (React Build Assets)
# ------------------------------------------------------
STATIC_URL = "/static/"

STATICFILES_DIRS = [
    os.path.join(FRONTEND_DIR, "assets"),
]

DEFAULT_AUTO_FIELD = "django.db.models.BigAutoField"

# ------------------------------------------------------
# CORS SETTINGS (FINAL FIX)
# ------------------------------------------------------
CORS_ALLOW_ALL_ORIGINS = True      # Allow React localhost:5173
CORS_ALLOW_HEADERS = ["*"]         # Allow all headers
CORS_ALLOW_METHODS = ["*"]         # Allow GET, POST, PUT, DELETE, OPTIONS
