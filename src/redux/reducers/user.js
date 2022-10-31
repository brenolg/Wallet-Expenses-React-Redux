import { SAVEUSER } from '../actions';

const INITIAL_STATE = {
  email: '',
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEUSER:

    return {
      ...state,
      email: payload,
    };

  default:
    return state;
  }
};

export default user;

// Esse reducer será responsável por tratar as informações da pessoa usuária
