import { call, put, takeEvery } from 'redux-saga/effects';

const apiUrl = 'https://jsonplaceholder.typicode.com/users';

const getApi = () => {
  return fetch(apiUrl, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((res) => res.json())
    .catch((error) => { throw error; });
};

function* fetchUsers(action) {
  try {
    const users = yield call(getApi, action.payload);
    yield put({ type: 'GET_USERS_SUCCESS', users });
  } catch (e) {
    yield put({ type: 'GET_USERS_FAILED', message: e.message });
  }
}

function* userSaga() {
  yield takeEvery('GET_USERS_REQUEST', fetchUsers);
}

export default userSaga;
