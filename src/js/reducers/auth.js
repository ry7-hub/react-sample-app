export default function reducer(
  state = {
    user: {
      id: null,
      name: null,
    },
    loggingIn: false,
    loggedIn: false,
    token: null,
    error: null,
    token: null,
  },
  action
) {
  switch (action.type) {
    case "LOGIN_REQUEST": {
      return { ...state, loggingIn: true };
    }
    case "LOGIN_SUCCESS": {
      return {
        ...state,
        user: {
          id: action.payload.id,
          name: action.payload.name,
        },
        loggingIn: false,
        loggedIn: true,
        token: action.payload.token,
      };
    }
    case "LOGIN_FAILURE": {
      return {
        ...state,
        loggingIn: false,
        error: action.payload,
      };
    }
    // case "LOGOUT_SUCCESS": {
    //   return {
    //     ...state,
    //     loggedIn: false,
    //     error: null,
    //     token: null,
    //   };
    // }
  }

  return state;
}
