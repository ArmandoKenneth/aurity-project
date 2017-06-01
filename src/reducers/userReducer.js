import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function userReducer(state = defaultState, action){
	switch(action.type){
		case actionTypes.FETCH_USERS_SUCCESS:
			return {users: action.users, selectedUser: action.users.length > 0 ? action.users[0] : {}}
		case actionTypes.SELECT_USER_SUCCESS:
			return Object.assign({}, state, {selectedUser: action.selectedUser})
		case actionTypes.FETCH_USERS_ERROR:
			return Object.assign({}, state, {users: [], selectedUser: {}, userError: "Unable to complete the request"})
		default:
			return state;
	}
}