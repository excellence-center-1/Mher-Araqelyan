import pytest
import requests
import allure_pytest
import allure
from config import API_BASE_URL

@allure.title("Test get_categories API with token")
@allure.description("Testing get_categories api with token")
def test_get_categories_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.get(f"{API_BASE_URL}/category/list", headers=headers)
    assert response.status_code == 200,"Expected status code 200"
    for category in response.json():
        assert "id" in category, "expected 'id' field in response"
        assert "name" in category, "expected 'name' field in response"
        assert "createdAt" in category, "expected 'createdAt' field in response"
        assert "updatedAt" in category, "expected 'updatedAt' field in response"


@allure.title("testing api with token for receiving video")
def test_get_videos_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.get(f"{API_BASE_URL}/video/list", headers=headers)
    assert response.status_code == 200,"Expected status code 200"
    for video in response.json():
        assert "id" in video, "expected 'id' field in response"
        assert "title" in video,"expected 'title' field in response"
        assert "is_public" in video, "expected 'is_public' field in response"
        assert "url" in video, "expected 'url' field in response"
        assert "category" in video, "expected 'category' field in response"


@allure.title("testing api with token for creating video")
def test_create_video_with_token(get_token):
    video_data={
        "title": "testvideo20",
        "category": "Sport",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.post(f"{API_BASE_URL}/video/create", headers=headers, json=video_data)
    assert response.status_code == 200, "Expected status code 200"
    assert response.json()["title"] == video_data["title"]


@allure.title("testing api with token for deleting video")
def test_delete_video_with_token(get_token):
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.delete(f"{API_BASE_URL}/video/?videoId=3",headers=headers)
    assert response.status_code == 200,"Expected status code 200"


@allure.title("testing api with token for editing video")
def test_edit_video_with_token(get_token):
    video_data={
        "id": 14,
        "title": "testvideoUpdated",
        "category": "Rock",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.put(f"{API_BASE_URL}/video/edit",headers=headers,json=video_data)
    assert response.status_code == 200, "Expected status code 200"
    assert response.json()["message"] == "Video updated successfully", "Expected 'Video updated successfull' message in the response"

@allure.title("testing api with token for creating video with unvalid data")
def test_create_video_with_unvalid_data(get_token):
    video_data={
        "iddd": 14,
        "titlde": "testvideoUpdated",
        "category": "Rock",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.post(f"{API_BASE_URL}/video/create",headers=headers,json=video_data)
    assert response.json()["message"] == "Bad Request", "Expected 'Bad Request' message in the response"

class Test_without_token:
    @allure.tag("Without token")
    def test_get_videos_without_token(self):
        response = requests.get(f"{API_BASE_URL}/video/list")
        assert response.json()["message"]=="not authorized", "Expected 'not authorized' message in the response"

    @allure.tag("Without token")
    def test_edit_video_without_token(self):
        video_data={
            "id": 14,
            "title": "testvideoUpdated",
            "category": "Rock",
            "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
        }
        response = requests.put(f"{API_BASE_URL}/video/edit",json=video_data)
        assert response.json()["message"]=="not authorized", "Expected 'not authorized' message in the response"

    @allure.tag("Without token")
    def test_delete_video_without_token(self):
        response = requests.delete(f"{API_BASE_URL}/video/?videoId=3")
        assert response.json()["message"]=="not authorized", "Expected 'not authorized' message in the response"

    @allure.tag("Without token")
    def test_create_video_without_token(self):
        video_data={
            "title": "testvideo20",
            "category": "Sport",
            "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
        }
        response = requests.post(f"{API_BASE_URL}/video/create", json=video_data)
        assert response.json()["message"]=="not authorized","Expected 'not authorized' message in the response"

    @allure.tag("Without token")
    def test_get_categories_without_token(self):
        response = requests.get(f"{API_BASE_URL}/category/list")
        assert response.json()["message"]=="not authorized","Expected 'not authorized' message in the response"