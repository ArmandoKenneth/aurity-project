import workApi from "../api/workApi";
// import actionTypes from "../common/actionTypes";

/*
Action creators
*/
export function getWorkByUserSuccess(monthlyData){
	return {type: "GET_WORK_BY_USER_SUCCESS", monthlyData }
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