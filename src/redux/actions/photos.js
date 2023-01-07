import { api } from "../../api";
import { getPhotosFailed, getPhotosStarted, getPhotosSucces, getPhotosTotal, mutatePhotoFailed, mutatePhotoStarted, mutatePhotoSucces } from "../actionCreators/photos"

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


export const mutatePhoto = (photoId) => {
  return async (dispatch, getState) => {
    dispatch(mutatePhotoStarted());

    const { photos, users } = getState();
    const userId = users.authorizedUser.id;

    const photo = photos.photos.find(elem => elem.id === photoId)

    const newPhoto = {
      ...photo,
      likes: [...photo.likes]
    }

    if (newPhoto.likes.includes(userId)) {
      newPhoto.likes = newPhoto.likes.filter(like => like !== userId)
    } else {
      newPhoto.likes  = [...newPhoto.likes, userId]
    }

    try {

      const response = await api.photos.mutatePhoto({
        data: newPhoto,
        url: `/${photoId}`
      });

      const newPhotos = [...photos.photos];
      const photoIndex = newPhotos.findIndex(({id}) => id === photoId);
      newPhotos[photoIndex] = response.data;

      dispatch(getPhotosSucces(newPhotos));
      dispatch(mutatePhotoSucces());

    } catch (error) {
      dispatch(mutatePhotoFailed())
    }
  }
}