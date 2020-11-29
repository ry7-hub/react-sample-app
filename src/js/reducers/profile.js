export default function reducer(
  state = {
    name: null,
    description: null,
    isEdit: false,
    gettingProfile: false,
    gottenProfile: false,
    savingProfile: false,
    image: {
      id: null,
      base64: null,
    },
    loadingImage: false,
    loadComplete: false,
    uploadingImage: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "EDIT_PROFILE": {
      return {
        ...state,
        isEdit: true,
      };
    }
    case "EDIT_FINISHED_PROFILE": {
      return {
        ...state,
        isEdit: false,
      };
    }
    case "GET_PROFILE_REQUEST": {
      return {
        ...state,
        gettingProfile: true,
      };
    }
    case "GET_PROFILE_SUCCESS": {
      return {
        ...state,
        name: action.payload.screen_name,
        description: action.payload.description,
        gettingProfile: false,
        gottenProfile: true,
      };
    }
    case "GET_PROFILE_FAILURE": {
      return {
        ...state,
        gettingProfile: false,
        gottenProfile: true,
        error: action.payload,
      };
    }
    case "SAVE_PROFILE_REQUEST": {
      return {
        ...state,
        savingProfile: true,
      };
    }
    case "SAVE_PROFILE_SUCCESS": {
      return {
        ...state,
        savingProfile: false,
        gottenProfile: false, // これで再ロードさせる
        isEdit: false,
      };
    }
    case "SAVE_PROFILE_FAILURE": {
      return {
        ...state,
        savingProfile: false,
        gottenProfile: false, // これで再ロードさせる
        isEdit: false,
        error: action.payload,
      };
    }
    case "GET_IMAGE_REQUEST": {
      return { ...state, loadingImage: true, loadComplete: false };
    }
    case "GET_IMAGE_SUCCESS": {
      return {
        ...state,
        image: {
          id: action.payload.id,
          base64: action.payload.base64,
        },
        loadingImage: false,
        loadComplete: true,
        error: null,
      };
    }
    case "GET_IMAGE_FAILURE": {
      return {
        ...state,
        loadingImage: false,
        loadComplete: true,
        error: action.payload,
      };
    }
    case "UPLOAD_IMAGE_REQUEST": {
      return { ...state, uploadingImage: true };
    }
    case "UPLOAD_IMAGE_SUCCESS": {
      return {
        ...state,
        uploadingImage: false,
        loadComplete: false, // これで再ロードさせる
        error: null,
      };
    }
    case "UPLOAD_IMAGE_FAILURE": {
      return {
        ...state,
        uploadingImage: false,
        loadComplete: false, // これで再ロードさせる
        error: action.payload,
      };
    }
  }

  return state;
}
