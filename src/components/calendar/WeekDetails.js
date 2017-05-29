import React from 'react';

const WeekDetails = ({week}) => {

	let dayDetail = {
		backgroundColor: "rgba(229, 229, 229, 0.4)",
		padding: "1em",
		textAlign: "center"
	}

	let subTitleStyle = {
		borderBottom: "2px solid rgb(240, 210, 79)",
		margin: "1.5em",
		// marginop: "1.5em",
	}

	function addLeadingZero(value){
		return value < 10 ? "0"+value : value;
	}

	if (week){
		return (

			<div>
				<h4><span style={subTitleStyle}>Week details</span></h4>
				<div className="row">
					{
						week.days_in_week.map((day) =>{
							return (
								<div key={day.id} className="col-lg-1 col-sm-1 col-md-1" style={dayDetail}>
									<div className="row">
										<b>{addLeadingZero(day.day_number)}</b>
									</div>
									<div className="row">
										{addLeadingZero(day.hours)}:{addLeadingZero(day.minutes)}
									</div>
								</div>
							)
						})
					}
				</div>
			</div>
			
		);
	}else{
		return <span/>
	}
};

export default WeekDetails;