import pytest
import requests

@pytest.fixture(scope="module")
def get_token():
    login_data = {"email": "test@mail.com", "password": "123"}
    response = requests.post("http://localhost:5000/user/login", json=login_data)
    assert response.status_code == 200
    return response.json()["token"]