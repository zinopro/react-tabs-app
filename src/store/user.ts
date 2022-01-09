import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { User } from "../type";

const InitialUser: User[] = [
  {
    id: null,
    username: null,
    phone: null,
    loading: false
  }
];

export const slice = createSlice({
  name: 'users',
  initialState: InitialUser,
  reducers: {
    create: (state, { payload }: PayloadAction<{ id: string; username: string; phone: string; loading: boolean }>) => {
      state.push(payload);
    },
    update:(state, { payload }: PayloadAction<{ id: string; loading: boolean }>) => {
      const index = state.findIndex(users => users.id === payload.id);
      if (index !== -1) {
        state[index].loading = payload.loading
      }
    }
  }
});

export default slice.reducer

const { create, update } = slice.actions


export const signup = ({ id, username, phone, loading }) => async dispatch => {
  try {
    await dispatch(create({ id, username, phone, loading }));
    const fakeResponse = await makeRequest({id, username, phone, loading });
    dispatch(update(fakeResponse));
  } catch (e) {
    return console.error(e.message);
  } 
}

function makeRequest<User>(userData: User): Promise<User> {
  return new Promise(resolve => {
      setTimeout(() => {
      const data: User = {...userData, loading: false };
          resolve(data);
      }, 2000);
  })
}
