import userApi from "../api/userApi";
// import actionTypes from "../common/actionTypes";

/*
Action creators
*/
export function fetchUsersSuccess(users){
	return {type: "FETCH_USERS_SUCCESS", users }
}

export function selectUserSuccess(selectedUser){
	return {type: "SELECT_USER_SUCCESS", selectedUser}
}

/*
Actions
*/
export function fetchUsers(){
	return function(dispatch){
		return userApi.fetchUsers().then(users => {
			dispatch(fetchUsersSuccess(users));
		}).catch(error => {
			throw error;
		});
	}
}

export function selectUser(selectedUser){
	return function(dispatch){
		return dispatch(selectUserSuccess(selectedUser));
	}
}