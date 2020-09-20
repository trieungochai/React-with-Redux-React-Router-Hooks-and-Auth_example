import * as ACTION_TYPES from '../actions/action_types';

const initialState = {
  stateProp1: false,
  user_text: '',
};

const Reducer1 = (state = initialState, action) => {
  switch (action.type) {
    case ACTION_TYPES.SUCCESS:
      return {
        ...state,
        stateProp1: true,
      };
    case ACTION_TYPES.FAILURE:
      return {
        ...state,
        stateProp1: false,
      };
    case ACTION_TYPES.USER_INPUT:
      return {
        ...state,
        user_text: action.payload,
      };
    default: return state;
  };
};


export default Reducer1;