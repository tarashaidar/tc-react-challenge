import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDiscoverRequest } from "../../../store/actions/discover.action";
import {
  selectCategories,
  selectNewReleases,
  selectPlaylists,
  selectDiscoverLoading,
  selectDiscoverError,
} from "../../../store/selectors/discover.selector";
import DiscoverBlock from "./DiscoverBlock/components/DiscoverBlock";
import { ThreeDots } from "react-loader-spinner";
import "../styles/_discover.scss";

const Discover = () => {
  const loading = useSelector(selectDiscoverLoading);
  const error = useSelector(selectDiscoverError);
  const newReleases = useSelector(selectNewReleases);
  const playlists = useSelector(selectPlaylists);
  const categories = useSelector(selectCategories);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDiscoverRequest());
  }, []);

  if (loading) {
    return (
      <ThreeDots
        height="80"
        width="80"
        radius="9"
        color={"#cecedc"}
        visible={true}
      />
    );
  } else if (error) {
    return <div>{error}</div>;
  } else {
    return (
      <div className="discover">
        <DiscoverBlock
          text="RELEASED THIS WEEK"
          id="released"
          data={newReleases}
        />
        <DiscoverBlock
          text="FEATURED PLAYLISTS"
          id="featured"
          data={playlists}
        />
        <DiscoverBlock
          text="BROWSE"
          id="browse"
          data={categories}
          imagesKey="icons"
        />
      </div>
    );
  }
};

export default Discover;
