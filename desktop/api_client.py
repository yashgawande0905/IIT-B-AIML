import requests

BASE = "http://127.0.0.1:8000/api/"

def upload_csv(filepath):
    files = {'file': open(filepath, 'rb')}
    r = requests.post(BASE + "upload/", files=files)
    return r.json()

def latest():
    r = requests.get(BASE + "history/?latest=true")
    return r.json()[0]    # your backend returns a list
