import { combineReducers } from 'redux';
import { layoutReducer } from './layoutreducers';
import { userReducer } from './user_reducers';

export const rootReducer = combineReducers({
  layout: layoutReducer,
  user: userReducer
});

export type RootState = ReturnType<typeof rootReducer>;