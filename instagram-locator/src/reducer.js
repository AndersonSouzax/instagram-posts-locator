const initialUser = {
	token : '', 
	coord : [-3.864271,-38.581879],
	locations : [],
	recentLocationsMedia: [],
	followers : [],
	folPosts : [],
}

const mainReducer = ( state = initialUser, action ) => {
	
	switch(action.type){

		case 'SET_TOKEN':

			return Object.assign({}, state, { token: action.token });

		case 'SET_COORD':

			return Object.assign({}, state, { coord: action.coord });

		case 'SET_LOCATIONS':

			return Object.assign({}, state, { locations: action.locations });

		case 'SET_RECENT_LOCATION_MEDIA':

			return Object.assign({}, state, { 
				recentLocationsMedia : action.recentLocationsMedia });

		case 'SET_FOLLOWERS':

			return Object.assign({}, state, { followers: action.followers });

		case 'SET_FOL_POSTS':

			return Object.assign({}, state, { folPosts: action.folPosts });

		case 'COORD_SET':

			return state;

		case 'SECOND_PAGE_COORD_SET':

			return state;

		case 'DELETE_FOLLOWERS':

			return Object.assign({}, state, { followers: [] });

		default:

		return state;

	}

}

export default mainReducer;