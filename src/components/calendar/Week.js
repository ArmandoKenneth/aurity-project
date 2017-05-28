import React from 'react';

const Week = ({week}) => {
	return (
		<div>
			<table>
				<tbody>
					<tr>
					{
						week.days_in_week.map(function(day){
							return <td key={day.id}>{day.day_number}</td>
						})
					}
					</tr>	
				</tbody>
				
			</table>
		</div>
	);
};


export default Week;