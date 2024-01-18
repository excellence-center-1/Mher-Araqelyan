import pytest
import requests
from config import API_BASE_URL
import psycopg2
import allure
connect = psycopg2.connect(host='localhost', user='mytestuser', password='mypass', dbname='video_gallery')
cursor = connect.cursor()
@pytest.mark.parametrize("video_data", [
    {
        "title": "testvideo99",
        "category": "Sport",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    },
    {
        "title": "testvideo10",
        "category": "Sport",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    },
    {
        "title": "testvideo11",
        "category": "Sport",
        "url": "https://www.youtube.com/embed/0bYDeZpIZvk?si=z8POfOgCnQxEn1Vq"
    }

])
@pytest.mark.xfail
@allure.title("Test Authentication (Data: {video_data})")
def test_create_video_with_token(get_token,video_data):
    allure.attach.file('./test.txt',attachment_type=allure.attachment_type.TEXT)
    headers = {"Authorization": f"Bearer {get_token}"}
    response = requests.post(f"{API_BASE_URL}/video/create", headers=headers, json=video_data)
    cursor.execute(f"SELECT * FROM videos WHERE title = '{video_data['title']}'")
    row = cursor.fetchone() 
    assert response.status_code == 200, "Status code is not 200. Expected 200."
    assert row[1] == video_data["title"], f"Title from the database ({row[1]}) is not the same as expected ({video_data['title']})"

