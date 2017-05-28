// import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function userReducer(state = defaultState, action){
	switch(action.type){
		case "GET_WORK_BY_USER_SUCCESS":
			return Object.assign({}, state, {monthlyData: action.monthlyData.data})
		default:
			return state;
	}
}