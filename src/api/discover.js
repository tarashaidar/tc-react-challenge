import clientAPI from './interceptor';
import { Endpoints } from "../constants/endpoints";

export const getNewReleases = () => clientAPI(Endpoints.LoadNewReleases);

export const getFeaturedPlaylists = () => clientAPI(Endpoints.LoadFeaturedPlaylists);

export const getCategories = () => clientAPI(Endpoints.LoadCategories);


