import workApi from "../api/workApi";
// import actionTypes from "../common/actionTypes";

/*
Action creators
*/
export function getWorkByUserSuccess(monthlyData){
	return {type: "GET_WORK_BY_USER_SUCCESS", monthlyData }
}

export function updateSelectedMonthSuccess(month){
	return {type: "UPDATE_SELECTED_MONTH_SUCCESS", month}
}

export function updateSelectedYearSuccess(year){
	return {type: "UPDATE_SELECTED_YEAR_SUCCESS", year}
}


/*
Actions
*/
export function getWorkByUser(user, month, year){
	return function(dispatch){
		return workApi.getWorkByUser(user, month, year).then(monthlyData => {
			console.log(monthlyData);
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