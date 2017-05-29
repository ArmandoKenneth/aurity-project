import userReducer from '../reducers/userReducer';
import * as actionTypes from '../common/actionTypes';

 const date = new Date()
 const currentYear = date.getFullYear()
 const currentMonth = date.getMonth() + 1


 describe('user reducer', () => {
 	it('returns a default state', () => {
 		expect(userReducer(undefined, {})).toEqual(
 		{
 			users: [],
 			selectedUser: {},
 			monthlyData: {
 				year: currentYear,
 				weeks: [],
 				month: currentMonth
 			},
 			selectedYear: currentYear,
 			selectedMonth: currentMonth,
 			selectedWeek: -1
 		})
 	})

 	it('handles FETCH_USERS_SUCCESS', () => {
 		const userData = [{id: 1, email: "1@1.com", username: "1"}, {id: 2, email: "2@2.com", username: "2"}]
 		expect(
 			userReducer({}, {
 				type: actionTypes.FETCH_USERS_SUCCESS,
 				users: userData
 			})
 		).toEqual({
			selectedUser: {
				email: userData[0].email,
				id: userData[0].id,
				username: userData[0].username	
			},
			users: userData
		})
	})

	it('handles SELECT_USER_SUCCESS', () => {
 		const userData = [{id: 1, email: "1@1.com", username: "1"}, {id: 2, email: "2@2.com", username: "2"}]
 		const selectedUser = userData[1]
 		expect(
 			userReducer({}, {
 				type: actionTypes.SELECT_USER_SUCCESS,
 				users: userData,
 				selectedUser: selectedUser
 			})
 		).toEqual({
			selectedUser: {
				email: selectedUser.email,
				id: selectedUser.id,
				username: selectedUser.username	
			}
		})
	})
 })