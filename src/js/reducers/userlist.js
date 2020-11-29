export default function reducer(
  state = {
    users: [],
    loading: false,
    error: null,
  },
  action
) {
  switch (action.type) {
    case "GET_USERS_REQUEST": {
      return {
        ...state,
        loading: true,
        users: [],
        error: null,
      };
    }
    case "GET_USERS_SUCCESS": {
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    }
    case "GET_USERS_FAILURE": {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
  }

  return state;
}
