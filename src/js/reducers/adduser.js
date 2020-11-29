export default function reducer(
  state = {
    name: null,
    screen_name: null,
    password: null,
    description: null,
    saving: false,
    saveComplete: false,
    dialogOpen: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "ADD_USER_REQUEST": {
      return {
        ...state,
        saving: true,
        saveComplete: false,
        error: null,
      };
    }
    case "ADD_USER_SUCCESS": {
      return {
        ...state,
        saving: false,
        saveComplete: true,
      };
    }
    case "ADD_USER_FAILURE": {
      return {
        ...state,
        saving: false,
        error: action.payload,
      };
    }
    case "OPEN_DIALOG": {
      return {
        ...state,
        dialogOpen: true,
        saveComplete: false,
      };
    }
    case "CLOSE_DIALOG": {
      return {
        ...state,
        dialogOpen: false,
      };
    }
    case "ALL_CLEAR_ADD_USER": {
      return {
        ...state,
        name: null,
        screen_name: null,
        password: null,
        description: null,
        saving: false,
        saveComplete: false,
        error: null,
      };
    }
  }

  return state;
}
