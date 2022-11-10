import { SAVEWALLET, EXCHANGE_INFOS, DELETEITEM } from '../actions';

const INITIAL_STATE = {
  currencies: [],
  expenses: [],
};

const user = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
  case SAVEWALLET:

    return {
      ...state,
      currencies: payload,
    };

  case EXCHANGE_INFOS:
    return ({
      ...state,
      expenses: [...state.expenses, payload],
    });

  case DELETEITEM:
    return {
      ...state,
      expenses: payload,
    };

  default:
    return state;
  }
};

export default user;
// Esse reducer será responsável por tratar o todas as informações relacionadas as despesas
