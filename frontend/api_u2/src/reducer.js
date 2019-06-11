import { combineReducers } from 'redux';

const initialState = {
  beverages: []
}

const root = (state = initialState, action) => {
  switch(action.type){
    case 'ADD_BEVERAGES':
      return{
        ...state,
        beverages: [...action.payload]
      }
    default:
      return state
  }
}

export default combineReducers({
  root
});
