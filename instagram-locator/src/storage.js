
class Storage{

	constructor(wind){
		this.win = wind;
	}

	addLoginInfo(informations) {
		try{
			return this.win.localStorage.setItem('loginInfomations', 
				JSON.stringify(informations));
		}catch(e){
			return false;
		}
	}

	removeLoginInfo(){
		try{
			return this.win.localStorage.removeItem('loginInfomations');
		}catch(e){
			return false;
		}
	}

	getLoginInformation(){
		try{
			return this.win.localStorage.getItem('loginInfomations');
		}catch(e){
			return false;
		}
	}

}

export default Storage;