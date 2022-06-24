import {
  UPDATE_USER_MARKER,
  UPDATE_CENTER_MAP,
  UPDATE_MARKER_BY_SEARCHBOX,
  UPDATE_DELIVERY_PRICE
} from './deliveryActionTypes'

function deliveryReducer(state, action){
  const { type, payload } = action;

  switch(type){
    case UPDATE_USER_MARKER:
      return { ...state, userMarker:payload };
    case UPDATE_CENTER_MAP:
      return { ...state, centerMap: payload };
    case UPDATE_MARKER_BY_SEARCHBOX:
      return { ...state,  userMarker: payload, centerMap: payload };
    case UPDATE_DELIVERY_PRICE:
      return { ...state, price: payload };
    default:
      return state;
  }

}

export default deliveryReducer;
