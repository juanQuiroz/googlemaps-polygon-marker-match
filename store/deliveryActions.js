import {
  UPDATE_USER_MARKER,
  UPDATE_CENTER_MAP,
  UPDATE_MARKER_BY_SEARCHBOX,
  UPDATE_DELIVERY_PRICE,
  UPDATE_SUCURSAL_ID,
} from "./deliveryActionTypes";

export const updateUserMarker = (marker) => ({type: UPDATE_USER_MARKER, payload: marker });
export const updateCenterMap = (center) => ({type:UPDATE_CENTER_MAP, payload:center });
export const updateMarkerBySearchBox = (marker) => ({type:UPDATE_MARKER_BY_SEARCHBOX, payload: marker});
export const updateDeliveryPrice = (price) => ({type:UPDATE_DELIVERY_PRICE, payload: price});
export const updateSucursalId = (id) => ({type: UPDATE_SUCURSAL_ID, payload: id });
