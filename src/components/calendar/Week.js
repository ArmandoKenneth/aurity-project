import React from 'react';

const Week = ({week, onClick}) => {
	let dayStyle = {
		// backgroundColor: "blue",
		width: "80px",
		height: "80px",
		display: "inline"
	};
	return (
		<div onClick={onClick} className={week.week_id}>
			{
				week.days_in_week.map(function(day){
					return <div key={day.id} className={week.week_id} style={dayStyle}> {day.day_number} </div>
				})
			}
			{week.status}
		</div>
	);
};

export default Week;

// <table>
// 				<tbody>
// 					<tr>
// 					{
// 						week.days_in_week.map(function(day){
// 							return <td key={day.id} className={week.week_id} ><div>{day.day_number}</div></td>
// 						})
// 					}
// 					</tr>	
// 				</tbody>
				
// 			</table>