/*
Keeping all user related api calls to this file
*/
class UserApi {
	
	static getAllUsers() {
		return fetch('https://timesheet-staging-aurity.herokuapp.com/api/users').then(response => {
			return response.json();
		}).catch(error => {
			return error;
		});	
	}

}

export default UserApi;