import { put, call, fork, takeEvery } from "redux-saga/effects";
import axios from "axios";

// TODO 別ファイルに定義する
// ログイン
const loginApi = (auth) =>
  axios.post("http://localhost:3000/api/v1/auth/login", auth);

function* watchLogin() {
  yield takeEvery("LOGIN", login);
}

function* login(action) {
  yield put({ type: "LOGIN_REQUEST" });

  try {
    const posts = yield call(loginApi, action.payload.formData);
    const token = posts.data.token;
    const { history } = action.payload;

    if (token) {
      yield put({ type: "LOGIN_SUCCESS", payload: posts.data });

      localStorage.setItem("token", token);

      history.push("/");
    } else {
      yield put({ type: "LOGIN_FAILURE", payload: posts.data });
    }
  } catch (e) {
    yield put({ type: "LOGIN_FAILURE", payload: e });
  }
}

// リロード時のログインチェック
const loginCheckApi = () => {
  const url = "http://localhost:3000/api/v1/auth/me";
  const token = localStorage.getItem("token");
  return axios
    .get(url, {
      headers: { "x-access-token": token },
      data: {},
    })
    .then((response) => {
      const user = {
        id: response.data._id,
        name: response.data.name,
        token: token,
      };
      return { user };
    })
    .catch((error) => {
      return { error };
    });
};

function* watchLoginCheck() {
  yield takeEvery("LOGIN_CHECK", loginCheck);
}

function* loginCheck() {
  try {
    const { user, error } = yield call(loginCheckApi);

    if (user) {
      yield put({ type: "LOGIN_SUCCESS", payload: user });
    } else {
      yield put({ type: "LOGIN_FAILURE", payload: error });
    }
  } catch (e) {
    yield put({ type: "LOGIN_FAILURE", payload: e });
  }
}

// ユーザリスト取得
const getUsersApi = () => {
  const url = "http://localhost:3000/api/v1/user/";
  return axios
    .get(url)
    .then((response) => {
      const users = response.data;
      return { users };
    })
    .catch((error) => {
      return { error };
    });
};

function* watchGetUsers() {
  yield takeEvery("GET_USERS", getUsers);
}

function* getUsers(action) {
  yield put({ type: "GET_USERS_REQUEST" });

  try {
    const { users, error } = yield call(getUsersApi);

    if (users != null && users.length > 0) {
      yield put({ type: "GET_USERS_SUCCESS", payload: users });
    } else {
      yield put({ type: "GET_USERS_FAILURE", payload: error });
    }
  } catch (e) {
    yield put({ type: "GET_USERS_FAILURE", payload: e });
  }
}

// ユーザ新規登録
const addUserApi = (data) =>
  axios.post("http://localhost:3000/api/v1/user/", data.formData);

function* watchAddUser() {
  yield takeEvery("ADD_USER", addUser);
}

function* addUser(action) {
  yield put({ type: "ADD_USER_REQUEST" });

  try {
    const posts = yield call(addUserApi, action.payload);

    if (posts.data.message == "Success") {
      yield put({ type: "ADD_USER_SUCCESS" });
    } else {
      yield put({ type: "ADD_USER_FAILURE", payload: posts.data });
    }
  } catch (e) {
    yield put({ type: "ADD_USER_FAILURE", payload: e });
  }
}

// プロフィール取得
const getProfileApi = (id) => {
  const url = "http://localhost:3000/api/v1/user/" + id;
  return axios
    .get(url)
    .then((response) => {
      const profile = {
        screen_name: response.data.screen_name,
        description: response.data.description,
      };
      return { profile };
    })
    .catch((error) => {
      return { error };
    });
};

function* watchGetProfile() {
  yield takeEvery("GET_PROFILE", getProfile);
}

function* getProfile(action) {
  if (action.payload.id == null) {
    return;
  }

  yield put({ type: "GET_PROFILE_REQUEST" });

  try {
    const { profile, error } = yield call(getProfileApi, action.payload.id);

    if (profile) {
      yield put({ type: "GET_PROFILE_SUCCESS", payload: profile });
    } else {
      yield put({ type: "GET_PROFILE_FAILURE", payload: error });
    }
  } catch (e) {
    yield put({ type: "GET_PROFILE_FAILURE", payload: e });
  }
}

// プロフィール保存
const saveProfileApi = (data) =>
  axios.put("http://localhost:3000/api/v1/user/" + data.id, data.formData);

function* watchSaveProfile() {
  yield takeEvery("SAVE_PROFILE", saveProfile);
}

function* saveProfile(action) {
  yield put({ type: "SAVE_PROFILE_REQUEST" });

  try {
    const posts = yield call(saveProfileApi, action.payload);

    if (posts.data.message == "Success") {
      yield put({ type: "SAVE_PROFILE_SUCCESS" });
    } else {
      yield put({ type: "SAVE_PROFILE_FAILURE", payload: posts.data });
    }
  } catch (e) {
    yield put({ type: "SAVE_PROFILE_FAILURE", payload: e });
  }
}

// アカウント画像取得
const getImageApi = (id) => {
  const url = "http://localhost:3000/api/v1/image/" + id;
  return axios
    .get(url)
    .then((response) => {
      const image = {
        id: response.data.id,
        base64: response.data.image,
      };
      return { image };
    })
    .catch((error) => {
      return { error };
    });
};

function* watchGetImage() {
  yield takeEvery("GET_IMAGE", getImage);
}

function* getImage(action) {
  if (action.payload.id == null) {
    return;
  }

  yield put({ type: "GET_IMAGE_REQUEST" });

  try {
    const { image, error } = yield call(getImageApi, action.payload.id);

    if (image) {
      yield put({ type: "GET_IMAGE_SUCCESS", payload: image });
    } else {
      yield put({ type: "GET_IMAGE_FAILURE", payload: error });
    }
  } catch (e) {
    yield put({ type: "GET_IMAGE_FAILURE", payload: e });
  }
}

// 画像アップロード
const uploadImageApi = (data) =>
  axios.post("http://localhost:3000/api/v1/image", data);

function* watchUploadImage() {
  yield takeEvery("UPLOAD_IMAGE", uploadImage);
}

function* uploadImage(action) {
  yield put({ type: "UPLOAD_IMAGE_REQUEST" });

  try {
    const posts = yield call(uploadImageApi, action.payload);

    if (posts.data.message == "Success") {
      yield put({ type: "UPLOAD_IMAGE_SUCCESS" });
    } else {
      yield put({ type: "UPLOAD_IMAGE_FAILURE", payload: posts.data });
    }
  } catch (e) {
    yield put({ type: "UPLOAD_IMAGE_FAILURE", payload: e });
  }
}

// ログアウト
function* watchLogout() {
  yield takeEvery("LOGOUT", handleLogout);
}

function* handleLogout() {
  localStorage.removeItem("token");
  yield put({ type: "LOGOUT_SUCCESS" });
}

export default function* rootSaga() {
  yield fork(watchLogin);
  yield fork(watchLoginCheck);
  yield fork(watchGetUsers);
  yield fork(watchAddUser);
  yield fork(watchGetProfile);
  yield fork(watchSaveProfile);
  yield fork(watchGetImage);
  yield fork(watchUploadImage);
  yield fork(watchLogout);
}
