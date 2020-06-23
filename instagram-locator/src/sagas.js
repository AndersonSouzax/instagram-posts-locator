import { call, put, select } from 'redux-saga/effects'
import Requests from './requests';

function* getFirstPageInfo() {
	
	try{

		const token = yield select(state => state.token);

		const coords = yield select(state => state.coord);

		const locations = yield call(Requests.getLocations, token, coords);

		yield put({ type : 'SET_LOCATIONS', locations : locations });

		const data = yield call(Requests.getLocationsData, token, locations);

		yield put({ 
			type : 'SET_RECENT_LOCATION_MEDIA', recentLocationsMedia : data 
		});

		const fol = yield call(Requests.getFollowedBy, token);

		let followers = [];

		data.forEach( (e,i,a) => {
			
			e.forEach((el,ind,arr) => {

				let i = 0, j = fol.length;

				for(i; i < j; i++){

					if( fol[i].id === el.user.id ){
						
						//Incluindo junto a informação do usuario, a sua localização
						followers.push(Object.assign({},fol[i], el.location ));
					}	
				}
				
			});
		});

		yield put({ type : 'SET_FOLLOWERS', followers : followers });

	}catch(e){
		console.log('error' + e.message);
	}
}

function* getSecondPageInfo(){

	try{
		
		const token =   yield select(state => state.token);
		
		const coords =  yield select(state => state.coord);

		const media =   yield call(Requests.getMedia, token, coords);

		const friends = yield select(state => state.followers);

		let friPosts = [];

		media.forEach( (el, ind, arr) => {

			let i = 0, j = friends.length;

			for(i; i < j; i++){

				if(el.user.id === friends[i].id){

					let media = el.type === 'image' ? el.images : el.videos;

					friPosts.push({ type : el.type , media : media });
				}
			}
		});

		yield put({ type : 'SET_FOL_POSTS', folPosts : friPosts });

	}catch(e){
		console.log('error' + e.message);
	}
}

export default function* rootSaga() {
  yield takeEvery('REQUEST_FIRST_PAGE_INFO', getFirstPageInfo);
  yield takeEvery('REQUEST_SECOND_PAGE_INFO', getSecondPageInfo);	
}
