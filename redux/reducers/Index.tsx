import { combineReducers } from 'redux';
import { layoutReducer } from './layoutreducers';

export const rootReducer = combineReducers({
  layout: layoutReducer
});

export type RootState = ReturnType<typeof rootReducer>;