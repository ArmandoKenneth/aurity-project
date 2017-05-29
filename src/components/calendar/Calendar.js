import React from 'react';
import Week from './Week';
import WeekDetails from './WeekDetails';

const Calendar = ({name, onClick, monthlyData, selectedWeek}) => {

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

	let subTitleStyle = {
		borderBottom: "2px solid rgb(240, 210, 79)",
		margin: "1.5em",
		// marginop: "1.5em",
	}

	let calendarStyle = {
		paddingLeft: "2em"
		// border: "13px solid rgba(245, 247, 250, 1)",
		// maxWidth: "400px",
		// float: "left"
	}

	if (monthlyData.weeks.length == 0){
		return <h2><span style={subTitleStyle}>No data for the selected period</span></h2>
	}else{
		return (
			<div className="container" style={calendarStyle}>
				{
					monthlyData.weeks.sort(sortWeek).map(function(week){
						return <Week week={week} key={week.week_id} onClick={onClick} selectedWeek={selectedWeek}/>
						// {week.week_id}
						// return <div>This week {week.week_number} has {week.days_in_week.length} days</div>
					})
				}
				<WeekDetails week={monthlyData.weeks.filter((week) => {return week.week_id == selectedWeek})[0]}/>
			</div>
		);
	}
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