import * as types from '../../constants/types';

const initialState = {
  users: [],
  loading: false,
  error: null,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.GET_USERS_REQUEST: {
      return {
        ...state,
        loading: true,
      };
    }
    case types.GET_USERS_SUCCESS: {
      return {
        ...state,
        loading: false,
        users: action.users,
      };
    }
    case types.GET_USERS_FAILED: {
      return {
        ...state,
        loading: false,
        error: action.message,
      };
    }
    default: {
      return state;
    }
  }
};

export default reducer;
