import { SAVEWALLET } from '../actions';

const INITIAL_STATE = {
  currencies: [],
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEWALLET:

    return {
      ...state,
      currencies: payload,
    };

  default:
    return state;
  }
};

export default user;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
