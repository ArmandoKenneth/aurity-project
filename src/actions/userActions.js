import userApi from "../api/userApi";
import * as actionTypes from "../common/actionTypes";

/*
Action creators
*/
export function fetchUsersSuccess(users){
	return {type: actionTypes.FETCH_USERS_SUCCESS, users }
}

export function fetchUsersError(error){
	return { type: actionTypes.FETCH_USERS_ERROR, userError: error }
}

export function selectUserSuccess(selectedUser){
	return {type: actionTypes.SELECT_USER_SUCCESS, selectedUser}
}

/*
Actions
*/
export function fetchUsers(){
	return function(dispatch){
		return userApi.fetchUsers().then(users => {
			dispatch(fetchUsersSuccess(users));
		}).catch(error => {
			dispatch(fetchUsersError(error));
		});
	}
}

export function selectUser(selectedUser){
	return function(dispatch){
		return dispatch(selectUserSuccess(selectedUser));
	}
}