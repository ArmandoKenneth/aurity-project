// import * as actionTypes from "../common/actionTypes";
import defaultState from "../common/defaultState";

export default function workReducer(state = defaultState, action){
	switch(action.type){
		case "GET_WORK_BY_USER_SUCCESS":
			return Object.assign({}, state, {monthlyData: action.monthlyData.data});
		case "UPDATE_SELECTED_MONTH_SUCCESS":
			return Object.assign({}, state, {selectedMonth: action.month});
		case "UPDATE_SELECTED_YEAR_SUCCESS":
			return Object.assign({}, state, {selectedYear: action.year});
		case "UPDATE_SELECTED_WEEK_SUCCESS":
			return Object.assign({}, state, {selectedWeek: action.week})
		case "UPDATE_WEEK_STATUS_SUCCESS":
			let newWeeks = Object.assign([], state.monthlyData.weeks);
			newWeeks = newWeeks.map((week) => {
				if (week.week_id == action.weeklyData.week_id){
					return Object.assign({}, week, action.weeklyData);
				}
				return week;
			});
			let newState = Object.assign({}, state, {monthlyData: {weeks: newWeeks}});
			// newState.monthlyData.weeks[0] = action.weeklyData;
			// , monthlyData: {week: action.weeklyData}
			// a.monthlyData.weeks[0].week_id = 12;
			return newState;

			// let a = Object.assign({}, state, {monthlyData: {weeks: state.monthlyData.weeks.map(week, index) => {
			// 	if (week.week_id == action.weeklyData.week_id){
			// 		return Object.assign({}, week, action.weeklyData)
			// 	}
			// }}})
			// return state;
	
			// let newState = Object.assign({}, state);
			// let index = newState.monthlyData.weeks.findIndex(function(i){
			// 	return i.week_id == action.weeklyData.week_id;
			// })
			// newState.monthlyData.weeks = state.monthlyData.weeks.map((week, index) => {
				// if (week.week_id == action.weeklyData.week_id){
				// 	return Object.assign({}, week, action.weeklyData)
				// }
			// 	return week;
			// })
			// return Object.assign({}, newState);

			// const newState = Object.assign([], state);
			// let index = state.monthlyData.weeks.findIndex(function(i){
			// 	return i.week_id == action.weeklyData.week_id;
			// })
			// newState.monthlyData.weeks[index] = action.weeklyData;
			// return  Object.assign({}, newState);


			// let olderData = state.monthlyData.weeks.filter(weeklyData => weeklyData.week_id == action.weeklyData.week_id )[0];
			// let index = state.monthlyData.weeks.findIndex(function(i){
			// 	return i.week_id == action.weeklyData.week_id;
			// })
			// return Object.assign({}, state, {monthlyData: {weeks: weeks}});

			// let updatedData = Object.assign({}, state.monthlyData.weeks[index], action.weeklyData);
			// state.monthlyData.weeks[index] = updatedData;
			// return state;
			// return state;
			// this.setState(update(this.state.typeElements, 
			// 	{ $splice: [[props.index, 1, props]] }
			// ));
			// let newMonthlyData = state.monthlyData
			// let teste = state.monthlyData.filter(monthlyData => monthlyData.week.week_id.id !== action.weekly_data.week.id);
			// 
			// return Object.assign({}, state, {monthlyData: [
		 //        ...state.monthlyData.filter(monthlyData => monthlyData.week.week_id.id !== action.weekly_data.week.id),
		 //        Object.assign({}, action.weeklyData)
		 //    ]});
			// return [
		 //        ...state.filter(monthlyData => monthlyData.week.week_id.id !== action.weekly_data.week.id),
		 //        Object.assign({}, action.weeklyData)
		 //    ]
		default:
			return state;
	}
}