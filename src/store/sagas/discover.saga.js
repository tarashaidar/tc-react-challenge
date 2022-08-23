import { all, takeEvery, call, put } from "redux-saga/effects";
import {
  GET_DISCOVER_DATA,
  getDiscoverSuccess,
  getDiscoverFailure,
} from "../actions/discover.action";
import {
  getNewReleases,
  getFeaturedPlaylists,
  getCategories,
} from "../../api/discover";

function* fetchDiscoverData() {
  try {
    const [newReleases, playlists, categories] = yield all([
      call(getNewReleases),
      call(getFeaturedPlaylists),
      call(getCategories),
    ]);
    yield put(
      getDiscoverSuccess({
        newReleases: newReleases?.data,
        playlists: playlists?.data,
        categories: categories?.data,
      })
    );
  } catch (error) {
    yield put(getDiscoverFailure(error));
  }
}

export default function* discoverSaga() {
  yield all([yield takeEvery(GET_DISCOVER_DATA.REQUEST, fetchDiscoverData)]);
}
