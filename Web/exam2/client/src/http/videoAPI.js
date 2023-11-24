import { $authHost, $host } from "./index";

export const createVideo = async (video) => {
    try {
      const { data } = await $authHost.post('/video/create', video);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("error  creating video");
      }
    }
  };
  export const deleteVideo = async (videoId) => {
    try {
      const { data } = await $authHost.delete('/video/', {
        params: {
          videoId
        }
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while deleting the video.");
      }
    }
  };
  
  export const editVideo = async (video) => {
    try {
      const { data } = await $authHost.put('/video/edit', video);
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while editing the video.");
      }
    }
  };
  
  export const fetchVideos = async (category) => {
    try {
      const { data } = await $authHost.get('/video/list', {
        params: {
          category
        }
      });
      return data;
    } catch (error) {
      if (error.response && error.response.data) {
        alert(error.response.data.message);
      } else {
        alert("An error occurred while fetching videos.");
      }
    }
  };
  
