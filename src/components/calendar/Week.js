import React from 'react';
import * as Util from '../../common/util';

const Week = ({week, onClick, selectedWeek}) => {
	let dayStyle = {
		textAlign: "center",
		display: "inline",
		padding: "0.4em",
		minWidth: "40px",
		minHeight: "40px",
		maxWidth: "40px",
		maxHeight: "40px",
	};

	let weekStyle = {
		borderTop: "1px solid rgb(178, 178, 178)",
		borderBottom: "none",
		bordeLeft: "none",
		maxWidth: "310px",
		backgroundColor: week.week_id == selectedWeek ? "rgba(229, 229, 229, 1)" : "",
	}

	let iconStyle = {
		marginTop: "10px",
		marginLeft: "10px",
		color: week.status == "approved" ? "rgb(37, 165, 33)" : (week.status == "rejected" ? "rgb(255, 0, 0)" : "black"),
	}

	let classNames = week.week_id+" col-sm-1 col-xs-1 col-md-1 col-lg-1 col-xl-1";

	function buildIcon(status){
		return "glyphicon "+(status == "approved" ? "glyphicon-ok" : (week.status == "rejected" ? "glyphicon-remove red" : "glyphicon-time"))
	}


	function sortDay(a, b){
		return a.id - b.id;
	}

	return (
		
		<div onClick={onClick} className="row" style={weekStyle}>
			{
				week.days_in_week.sort(sortDay).map(function(day){
					return <div key={day.id} className={classNames} style={dayStyle}> {Util.addLeadingZero(day.day_number)} </div>
				})
			}
			<span className={buildIcon(week.status)} aria-hidden="true" style={iconStyle}></span>
		</div>
	);
};

export default Week;
