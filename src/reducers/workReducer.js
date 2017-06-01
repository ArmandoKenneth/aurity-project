import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function workReducer(state = defaultState, action){
	switch(action.type){
		case actionTypes.GET_WORK_BY_USER_SUCCESS:
			return Object.assign({}, state, {monthlyData: action.monthlyData.data});
		case actionTypes.GET_WORK_BY_USER_ERROR:	
			return Object.assign({}, state, {workError: "Unable to fetch data"});
		case actionTypes.UPDATE_SELECTED_MONTH_SUCCESS:
			return Object.assign({}, state, {selectedMonth: action.month});
		case actionTypes.UPDATE_SELECTED_MONTH_ERROR:
			return Object.assign({}, state, {workError: "Unable to select the month"});
		case actionTypes.UPDATE_SELECTED_YEAR_SUCCESS:
			return Object.assign({}, state, {selectedYear: action.year});
		case actionTypes.UPDATE_SELECTED_YEAR_ERROR:
			return Object.assign({}, state, {workError: "Unable to select the year"});
		case actionTypes.UPDATE_SELECTED_WEEK_SUCCESS:
			return Object.assign({}, state, {selectedWeek: action.week})
		case actionTypes.UPDATE_SELECTED_WEEK_ERROR:
			return Object.assign({}, state, {workError: "Unable to select the week"})
		case actionTypes.UPDATE_WEEK_STATUS_SUCCESS:
			let newWeeks = Object.assign([], state.monthlyData.weeks);
			newWeeks = newWeeks.map((week) => {
				if (week.week_id == action.weeklyData.week_id){
					return Object.assign({}, week, action.weeklyData);
				}
				return week;
			});
			let newState = Object.assign({}, state, {monthlyData: {weeks: newWeeks}});
			return newState;
		case actionTypes.UPDATE_WEEK_STATUS_ERROR:
			return Object.assign({}, state, {workError: "Unable to update the week status"})
		default:
			return state;
	}
}