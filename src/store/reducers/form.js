import { Types } from '../actions/form';

const initialState = {
  action: "new",
  productToUpdate: {},
}

export default function form(state=initialState, action){
  switch(action.type) {
    case Types.START_UPDATE:
      return {
        action: "update",
        productToUpdate: action.product,
      };
      default:
        return state;
  }
}