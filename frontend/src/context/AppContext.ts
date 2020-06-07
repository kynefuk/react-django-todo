import React from 'react';
import { initialState, TodoState } from '../reducer/Reducer';

export type AppContextType = TodoState;

export const AppContext = React.createContext<{
  state: AppContextType;
  dispatch: React.Dispatch<any>;
}>({
  state: initialState,
  dispatch: () => null,
});
