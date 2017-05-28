import React from 'react';
import Week from './Week';

const Calendar = ({name, onClick, monthlyData}) => {

	// function buildWeek(week) {
	// 	return (
	// 		<div key={week.week_id}>
	// 			<table>
	// 				<tbody>
	// 					<tr>
	// 					{
	// 						week.days_in_week.map(function(day){
	// 							return <td key={day.id}>{day.day_number}</td>
	// 						})
	// 					}
	// 					</tr>	
	// 				</tbody>
					
	// 			</table>
	// 		</div>
	// 	);
	// }

	function sortWeek(a, b){
		return a.week_number - b.week_number;
	}

	return (
		<div>
			{monthlyData.year} / {monthlyData.month}			
			<br/>
			Weeks: {monthlyData.weeks.length}
			<br/>
			{
				monthlyData.weeks.sort(sortWeek).map(function(week){
					return <Week week={week} key={week.week_id}/>
					// {week.week_id}
					// return <div>This week {week.week_number} has {week.days_in_week.length} days</div>
				})
			}
		</div>
	);
};

export default Calendar;

// <label htmlFor={name}>{label}</label>
// 			<select name={name} onChange={onChange}>
// 				{
// 				    users.map(function(user) {
// 				        return <option key={user.id} value={user.id}>{user.username} ({user.email})</option>;
// 				    })
// 			    }
// 			</select>