import {GET_POKEMONS} from '../constants/actionTypes';

const initialState = {data:{}};

// IMPORTANT: Note that with Redux, state should NEVER be changed.
// State is considered immutable. Instead,
// create a copy of the state passed and set new values on the copy.
// Note that I'm using Object.assign to create a copy of current state
// and update values on the copy.
export default function pokemonsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return Object.assign({}, state, {data: action.payload});
      break;
    default:
      return state;
  }
}
