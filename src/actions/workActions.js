import workApi from "../api/workApi";
import * as actionTypes from "../common/actionTypes";

/*
Action creators
*/
export function getWorkByUserSuccess(monthlyData){
	return {type: actionTypes.GET_WORK_BY_USER_SUCCESS, monthlyData }
}

export function updateSelectedMonthSuccess(month){
	return {type: actionTypes.UPDATE_SELECTED_MONTH_SUCCESS, month}
}

export function updateSelectedYearSuccess(year){
	return {type: actionTypes.UPDATE_SELECTED_YEAR_SUCCESS, year}
}

export function updateSelectedWeekSuccess(week){
	return {type: actionTypes.UPDATE_SELECTED_WEEK_SUCCESS, week}
}

export function changeWeekStatusSuccess(weeklyData){
	return {type: actionTypes.UPDATE_WEEK_STATUS_SUCCESS, weeklyData}
}

/*
Actions
*/
export function getWorkByUser(user, month, year){
	return function(dispatch){
		return workApi.getWorkByUser(user, month, year).then(monthlyData => {
			// console.log(monthlyData);
			dispatch(getWorkByUserSuccess(monthlyData));
		}).catch(error => {
			throw error;
		});
	}
}

export function updateSelectedMonth(month){
	return function(dispatch){
		return dispatch(updateSelectedMonthSuccess(month));
	}
}

export function updateSelectedYear(year){
	return function(dispatch){
		return dispatch(updateSelectedYearSuccess(year));
	}
}

export function updateSelectedWeek(week){
	return function(dispatch){
		return dispatch(updateSelectedWeekSuccess(week))
	}
}

export function changeWeekStatus(weekId, approver, status){
	return function(dispatch){
		return workApi.changeWeekStatus(weekId, approver, status).then(weeklyData => {
			dispatch(changeWeekStatusSuccess(weeklyData));
		}).catch(error => {
			throw error;
		});
	}
}