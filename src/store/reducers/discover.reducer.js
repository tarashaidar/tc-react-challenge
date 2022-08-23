import { GET_DISCOVER_DATA } from "../actions/discover.action";

const initialState = {
  newReleases: [],
  playlists: [],
  categories: [],
  loading: false,
  error: "",
};

export const discoverReducer = (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case GET_DISCOVER_DATA.REQUEST:
      return {
        ...state,
        loading: true,
        error: "",
      };

    case GET_DISCOVER_DATA.SUCCESS:
      const { newReleases, playlists, categories } = payload;
      return {
        ...state,
        newReleases,
        playlists,
        categories,
        loading: false,
      };

    case GET_DISCOVER_DATA.FAILURE:
      return {
        ...state,
        loading: false,
        error: "Loading was failed",
      };

    default:
      return state;
  }
};
