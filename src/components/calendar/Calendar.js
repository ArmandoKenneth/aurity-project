import React from 'react';
import Week from './Week';
import WeekDetails from './WeekDetails';

const Calendar = ({name, onClick, monthlyData, selectedWeek}) => {

	function sortWeek(a, b){
		return a.week_number - b.week_number;
	}

	let subTitleStyle = {
		borderBottom: "2px solid rgb(240, 210, 79)",
		margin: "1.5em",
	}

	let calendarStyle = {
		paddingLeft: "2em"
	}

	if (monthlyData.weeks.length == 0){
		return <h2><span style={subTitleStyle}>No data for the selected period</span></h2>
	}else{
		return (
			<div className="container" style={calendarStyle}>
				{
					monthlyData.weeks.sort(sortWeek).map(function(week){
						return <Week week={week} key={week.week_id} onClick={onClick} selectedWeek={selectedWeek}/>
					})
				}
				<WeekDetails week={monthlyData.weeks.filter((week) => {return week.week_id == selectedWeek})[0]}/>
			</div>
		);
	}
};

export default Calendar;
