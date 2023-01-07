import { GET_PHOTOS_FAILED, GET_PHOTOS_STARTED, GET_PHOTOS_SUCCESS, GET_PHOTOS_TOTAL, MUTATE_PHOTO_STARTED, MUTATE_PHOTO_SUCCESS } from "../actionCreators/photos";

const initialState = {
  photos: [],
  isPhotosLoading: true,
  totalPhotos: 0,
  isMutateLoading: false,

}

export const photosReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PHOTOS_STARTED:
      return {
        ...state,
        isPhotosLoading: true
      };

    case GET_PHOTOS_FAILED:
      return {
        ...state,
        isPhotosLoading: false,
      }

    case GET_PHOTOS_SUCCESS:
      return {
        ...state,
        photos: action.payload,
        isPhotosLoading: false,
      }

    case GET_PHOTOS_TOTAL:
      return {
        ...state,
        totalPhotos: action.payload
      }

    case MUTATE_PHOTO_STARTED:
      return {
        ...state,
        isMutateLoading: true,
      }

    case MUTATE_PHOTO_SUCCESS:
      return {
        ...state,
        isMutateLoading: false,
      }

    default:
      return state;
  }
}