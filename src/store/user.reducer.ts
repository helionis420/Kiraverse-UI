import { IPublicProfile, Nullable } from '@/api/api.interfaces';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

export interface IAppState {
  token: string;
  user: Nullable<IPublicProfile>;
}

const INITIAL_STATE: IAppState = {
  token: '',
  user: null,
};

export const appSlice = createSlice({
  name: 'app',
  initialState: INITIAL_STATE,
  reducers: {
    setToken(state, action: PayloadAction<string>) {
      state.token = action.payload;
    },
    setUser(state, action: PayloadAction<Nullable<IPublicProfile>>) {
      state.user = action.payload;
    },
    resetUser(state) {
      state.user = null;
      state.token = '';
    },
  },
});

// Action creators are generated for each case reducer function
export const { setToken, setUser, resetUser } = appSlice.actions;

export default appSlice.reducer;
