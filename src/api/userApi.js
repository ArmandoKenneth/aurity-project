import * as constants from "../common/constants";

/*
Keeping all user related api calls to this file
*/
class UserApi {
	
	static fetchUsers() {
		return fetch(constants.BASE_URL+'users').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});	
	}

}

export default UserApi;