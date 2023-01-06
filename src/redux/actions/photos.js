import { api } from "../../api";
import { getPhotosFailed, getPhotosStarted, getPhotosSucces, getPhotosTotal } from "../actionCreators/photos"

export const getPhotos = (page = 1) => {
  return async (dispatch, getState) => {
    try {
      const { photos } = getState();
      if (page === 1) {
        dispatch(getPhotosStarted);
      }
      const response = await api.photos.getPhotos({
        params: {
          _page: page,
          _limit: 5
        }
      });
      if (page === 1) {
        dispatch(getPhotosTotal(response.headers['x-total-count']));
        dispatch(getPhotosSucces([...response.data]));
      } else {
        dispatch(getPhotosSucces([...photos.photos, ...response.data]));
      }
    } catch (error) {
      dispatch(getPhotosFailed)
    }
  }
}