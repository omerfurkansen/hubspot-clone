import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import landingSelectReducer from '../features/landing-select/landingSelectSlice';
import buildMyPersonaReducer from '../features/build-my-persona/buildMyPersonaSlice';

export const store = configureStore({
  reducer: {
    landingSelect: landingSelectReducer,
    buildMyPersona: buildMyPersonaReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
