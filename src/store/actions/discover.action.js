import { createAction } from "redux-actions";
import { createActionConstants } from "../../utils/actions";

export const GET_DISCOVER_DATA = createActionConstants("GET_DISCOVER_DATA");

export const getDiscoverRequest = createAction(GET_DISCOVER_DATA.REQUEST);
export const getDiscoverSuccess = createAction(GET_DISCOVER_DATA.SUCCESS);
export const getDiscoverFailure = createAction(GET_DISCOVER_DATA.FAILURE);
