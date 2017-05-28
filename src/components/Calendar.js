import React from 'react';

const Calendar = ({name, onClick, monthlyData}) => {
	return (
		<div>
			{monthlyData.year} / {monthlyData.month}			
			<br/>
			Weeks: {monthlyData.weeks.length}
			<br/>
			{
				monthlyData.weeks.map(function(week){
					return "This week has "+week.days_in_week.length+" days";
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