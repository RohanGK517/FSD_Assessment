# FSD_Assessment
The assessment work given by INI8 LABS on full stack development

# Tech Used
- Backend: Django + Django REST Framework
- Frontend: HTML, CSS, JavaScript
- Database: MySQL

# Project Setup

1. Clone & Open Project
   https://github.com/RohanGK517/FSD_Assessment.git (Clone usinng this url) or can also download zip file

* cd FSD_Assessment

2. Create Virtual Environment (if necessery)
   python -m venv env
   env\Scripts\activate  (On Windows)

3. Install Packages
   pip install -r requirements.txt

4. MySQL Setup
   - Create a database called registration_db.
   - Update DATABASES in settings.py:
     DATABASES = {
         'default': {
             'ENGINE': 'django.db.backends.mysql',
             'NAME': 'registration_db',
             'USER': 'your_mysql_username',
             'PASSWORD': 'your_password',
             'HOST': 'localhost',
             'PORT': '3306',
         }
     }

5. Run Migrations
   python manage.py makemigrations
   python manage.py migrate

6. Start Server
   python manage.py runserver

------------------------

# Frontend

- Open frontend/index.html in browser.
- OR run:
    cd frontend
    python -m http.server
  Then open: http://127.0.0.1:8000/index.html

-----------------------------------------------

# Fix CORS Issues (if needed)
In settings.py:

- INSTALLED_APPS += ['corsheaders']
- MIDDLEWARE.insert(0, 'corsheaders.middleware.CorsMiddleware')
- CORS_ALLOW_ALL_ORIGINS = True

# Install package:
    pip install django-cors-headers
