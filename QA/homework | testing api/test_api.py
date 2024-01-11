import pytest
import requests
from config import API_BASE_URL

def test_get_categories_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.get(f"{API_BASE_URL}/category/list", headers=headers)
    assert response.status_code == 200
    for category in response.json():
        assert "id" in category
        assert "name" in category
        assert "createdAt" in category
        assert "updatedAt" in category

def test_get_videos_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.get(f"{API_BASE_URL}/video/list", headers=headers)
    assert response.status_code == 200
    for video in response.json():
        assert "id" in video
        assert "title" in video
        assert "is_public" in video
        assert "url" in video
        assert "category" in video

def test_get_videos_without_token():
    response = requests.get(f"{API_BASE_URL}/video/list")
    assert response.json()["message"]=="not authorized"
   

def test_create_video_with_token(get_token):
    video_data={
        "title": "testvideo20",
        "category": "Sport",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.post(f"{API_BASE_URL}/video/create", headers=headers, json=video_data)
    assert response.status_code == 200
    assert response.json()["title"] == video_data["title"]



def test_delete_video_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.delete(f"{API_BASE_URL}/video/?videoId=3",headers=headers)
    assert response.status_code == 200




def test_edit_video_with_token(get_token):
    video_data={
        "id": 14,
        "title": "testvideoUpdated",
        "category": "Rock",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.put(f"{API_BASE_URL}/video/edit",headers=headers,json=video_data)
    assert response.status_code == 200
    assert response.json()["message"] == "Video updated successfully"

def test_create_video_with_unvalid_data(get_token):
    video_data={
        "iddd": 14,
        "titlde": "testvideoUpdated",
        "category": "Rock",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.put(f"{API_BASE_URL}/video/create",headers=headers,json=video_data)
    assert response.json()["message"] == "Bad Request"

class Test_without_token:
    def test_edit_video_without_token(self):
        video_data={
            "id": 14,
            "title": "testvideoUpdated",
            "category": "Rock",
            "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
        }
        response = requests.put(f"{API_BASE_URL}/video/edit",json=video_data)
        assert response.json()["message"]=="not authorized"

    def test_delete_video_without_token(self):
        response = requests.delete(f"{API_BASE_URL}/video/?videoId=3")
        assert response.json()["message"]=="not authorized"

    def test_create_video_without_token(self):
        video_data={
            "title": "testvideo20",
            "category": "Sport",
            "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
        }
        response = requests.post(f"{API_BASE_URL}/video/create", json=video_data)
        assert response.json()["message"]=="not authorized"

    def test_get_categories_without_token(self):
        response = requests.get(f"{API_BASE_URL}/category/list")
        assert response.json()["message"]=="not authorized"