import { VALIDATE_USER } from '../actions';

export default function(state = {errorMessage:""}, action) {
  switch (action.type) {
  case VALIDATE_USER:
    return action.payload;
  default:
    return state;
  }
}
