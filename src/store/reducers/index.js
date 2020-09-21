import UserReducer from './user_reducer';
import Reducer1 from './reducer1';
import { combineReducers } from 'redux';

const RootReducer = combineReducers({
  reducer1: Reducer1,
  userReducer: UserReducer,
});

export default RootReducer;

