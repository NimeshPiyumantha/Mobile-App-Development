import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  value: 0,
}

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState:{ //initial state store karan inne ids tika.
    ids:[],
  },
  reducers: { //reducers kiyanne ape state eka uda vada karana methods tikata.
    addFavorite: (state, action) => { //state eka kiyanne initialState eke thina eka. action eka kiyanne passed vena data eka. 
        state.ids.push(action.payload.id); 
    },
    removeFavorite: (state, action) => {
        state.ids.splice(state.ids.indexOf(action.payload.id),1);
    },
  }, 
})

export const addFavorite = favoritesSlice.actions.addFavorite;
export const removeFavorite = favoritesSlice.actions.removeFavorite;

export default favoritesSlice.reducer