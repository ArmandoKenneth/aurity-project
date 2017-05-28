// import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function userReducer(state = defaultState, action){
	switch(action.type){
		case "FETCH_USERS_SUCCESS":
			return {users: action.users}
		case "SELECT_USER_SUCCESS":
			console.log("SLECIONOU");
			return Object.assign({}, state, {selectedUser: action.selectedUser})
			
		default:
			return state;
	}
}