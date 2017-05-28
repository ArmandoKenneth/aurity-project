// import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function userReducer(state = defaultState, action){
	switch(action.type){
		case "GET_WORK_BY_USER_SUCCESS":
			return Object.assign({}, state, {monthlyData: action.monthlyData.data});
		case "UPDATE_SELECTED_MONTH_SUCCESS":
			return Object.assign({}, state, {selectedMonth: action.month});
		case "UPDATE_SELECTED_YEAR_SUCCESS":
			return Object.assign({}, state, {selectedYear: action.year});
		default:
			return state;
	}
}