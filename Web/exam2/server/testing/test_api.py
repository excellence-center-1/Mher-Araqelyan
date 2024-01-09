import pytest
import requests

@pytest.fixture
def get_token():
    login_data = {"email": "test@mail.com", "password": "123"}
    response = requests.post("http://localhost:5000/user/login", json=login_data)
    assert response.status_code == 200
    return response.json()["token"]

def test_get_categories_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.get("http://localhost:5000/category/list", headers=headers)
    assert response.status_code == 200

def test_get_videos_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.get("http://localhost:5000/video/list", headers=headers)
    assert response.status_code == 200

def test_create_video_with_token(get_token):
    video_data={
        "title": "testvideo13",
        "category": "Sport",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.post("http://localhost:5000/video/create",headers=headers,json=video_data)
    assert response.status_code == 200
def test_delete_video_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.delete("http://localhost:5000/video/?videoId=3",headers=headers)
    assert response.status_code == 200

def test_edit_video_with_token(get_token):
    video_data={
        "id": 14,
        "title": "testvideoUpdatedd",
        "category": "Rock",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.put("http://localhost:5000/video/edit",headers=headers,json=video_data)
    assert response.status_code == 200