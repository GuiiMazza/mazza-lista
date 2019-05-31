import { Types } from '../actions/list'

const initialState = {
  list: null,
  items: [],
}


export default function list(state=initialState, action) {
  switch(action.type) {
    case Types.ADD_PODUCT:
      return { list: action.list, items: [...state.items, action.product] };
    default:
      return state;
  }
}