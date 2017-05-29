import React from 'react';  
import {connect} from 'react-redux';  
import * as userActions from '../actions/userActions';
import * as workActions from '../actions/workActions';
import UserSelect from '../components/UserSelect';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Calendar from '../components/calendar/Calendar';
import GeneralSelect from '../components/common/GeneralSelect';
import * as Constants from '../common/constants';

class Main extends React.Component {  

	buildStateFromProps(props){
		return {
			selectedUser: props.selectedUser,
			selectedMonth: props.selectedMonth,
			selectedYear: props.selectedYear,
			monthlyData: props.monthlyData,
			users: props.users,
			selectedWeek: props.selectedWeek
		}
	}

	constructor(props){
		super(props);
		this.state = this.buildStateFromProps(props);
		this.onChange = this.onChange.bind(this);
		this.onMonthChange = this.onMonthChange.bind(this);
		this.onYearChange = this.onYearChange.bind(this);
		this.onClickWeek = this.onClickWeek.bind(this);
		this.onApprove = this.onApprove.bind(this);
		this.onReject = this.onReject.bind(this);
		// if (!this.state.monthlyData || this.state.monthlyData.weeks.length == 0){
		// 	this.props.workActions.getWorkByUser(this.state.selectedUser.id, this.state.selectedMonth, this.state.selectedYear);
		// }
	}

	componentWillReceiveProps(nextProps){
		this.setState(this.buildStateFromProps(nextProps));
		// if (nextProps.monthlyData.weeks.length > 0 && this.state.selectedWeek == -1){
			// this.props.workActions.updateSelectedWeek(nextProps.monthlyData.weeks[0].week_id);
		// }
		// if (!nextProps.monthlyData || !nextProps.monthlyData.initialized){
		// 	this.props.workActions.getWorkByUser(nextProps.selectedUser.id, nextProps.selectedMonth, nextProps.selectedYear);
		// }
	}

	render() {
		//col-md-offset-2 col-sm-offset-2 col-xs-offset-2 col-lg-offset-2 
		let actionButtons = null;
		let acceptButtonDisabled;
		let rejectButtonDisabled;
		this.state.monthlyData.weeks.map((week) => {
			if (week.week_id == this.state.selectedWeek){
				acceptButtonDisabled = week.status == "approved";
				rejectButtonDisabled = week.status == "rejected";
			}
		});

		let glyphStyle = {
			marginRight: ".5em"
		}

		let logoStyle = {
			width: "50px"
		}

		let headerStyle = {
			backgroundColor: "rgb(240, 210, 79)"
		}

		let titleStyle = {
			fontSize: "20px",
			color: "#666464",
			paddingTop: "35px",
			display: "inline"
		}

		let userSpace = {
			width: "100%",
			height: "75px",
			padding: "1em",
			backgroundColor: "rgb(245, 247, 250)",
			// borderBottom: "2px solid rgba(240, 210, 79, .5)"
		}

		let dropdownSpace = {
			width: "100%",
			height: "70px",
			padding: "1em 1em 1em 3.5em",
			// backgroundColor: "rgba(245, 247, 250, .6)"
		}
		
		let calendarSpace = {
			// backgroundColor: "rgba(245, 247, 250, .6)",
			marginTop: -20
		}

		let generalSpace = {
			backgroundColor: "rgba(245, 247, 250, .6)"
		}

		let buttonsStyle = {
			padding: "2em"
		}

		if (this.state.selectedWeek > -1){
			actionButtons = <div style={buttonsStyle}>
				<button onClick={this.onApprove} className="btn btn-success" disabled={acceptButtonDisabled}>
					<span className="glyphicon glyphicon-ok" style={glyphStyle} aria-hidden="true"></span>Accept
				</button>
				<button onClick={this.onReject} className="btn btn-danger" disabled={rejectButtonDisabled}>
					<span className="glyphicon glyphicon-remove" style={glyphStyle}  aria-hidden="true"></span>Reject
				</button>
			</div>
		}

		return(
			<div>
				<div className="header" style={headerStyle}>
					<img src={process.env.PUBLIC_URL + '/img/logo.png'} style={logoStyle}/> <div style={titleStyle}>Aurity</div>
				</div>
				<div style={userSpace}>
					<UserSelect
						name="userSelect" 
						label="User"
						onChange={this.onChange}
						users={this.state.users && this.state.users.length > 0 ? this.state.users : []} 
						/>	
				</div>
				<div style={generalSpace}>	
					<div className="" style={dropdownSpace}>
						<GeneralSelect name="monthSelect" onChange={this.onMonthChange} data={Constants.MONTHS} selectedValue={this.state.selectedMonth} />
						<GeneralSelect name="yearSelect" onChange={this.onYearChange} data={Constants.YEARS} selectedValue={this.state.selectedYear}/>
					</div>
					<div className="" style={calendarSpace}>
						<Calendar name="calendar" onClick={this.onClickWeek} monthlyData={this.state.monthlyData} selectedWeek={this.state.selectedWeek} />
					</div>
				</div>
				<div style={generalSpace}>
					{actionButtons}
				</div>
			</div>
			
		)
	}

	onChange(event){
		// this.setState({
		// 	selectedUser: this.props.users.filter(user => user.id == event.target.value)[0]
		// });
		const user = this.props.users.filter(user => user.id == event.target.value)[0];
		this.props.userActions.selectUser(user);
		this.props.workActions.getWorkByUser(user.id, this.props.selectedMonth, this.props.selectedYear);
		this.props.workActions.updateSelectedWeek(-1);
		// this.props.workActions.getWorkByUser(event.target.value, this.props.selectedMonth, this.props.selectedYear);
		this.setState({selectedUser: user});
	}

	onMonthChange(event){
		this.props.workActions.updateSelectedMonth(event.target.value);
		this.props.workActions.getWorkByUser(this.props.selectedUser.id, event.target.value, this.props.selectedYear);
		this.props.workActions.updateSelectedWeek(-1);
		// this.props.workActions.updateSelectedWeek(this.props.monthlyData.weeks[0].week_id);
		// this.setState({selectedMonth: this.state.selectedMonth, selectedYear: this.state.selectedYear});
		// console.log("month changed to: "+event.target.value);
	}

	onYearChange(event){
		this.props.workActions.updateSelectedYear(event.target.value);
		this.props.workActions.getWorkByUser(this.props.selectedUser.id, this.props.selectedMonth, event.target.value);
		this.props.workActions.updateSelectedWeek(-1);
		// console.log("year changed to: "+event.target.value);
	}

	onClickWeek(event){
		this.props.workActions.updateSelectedWeek(event.target.className.split(" ")[0]);
		// console.log(event.target.className);
	}

	onApprove(event){
		// console.log("Vou aprovar")
		this.props.workActions.changeWeekStatus(this.state.selectedWeek, 1, "approved");
		// this.props.workActions.updateSelectedWeek(-1);
	}

	onReject(event){
		// console.log("Vou aprovar")
		this.props.workActions.changeWeekStatus(this.state.selectedWeek, 1, "rejected");
		// this.props.workActions.updateSelectedWeek(-1);
	}

}


Main.propTypes = {
	users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		users: state.userReducer.users,
		selectedUser: state.userReducer.selectedUser,
		monthlyData: state.workReducer.monthlyData,
		selectedMonth: state.workReducer.selectedMonth,
		selectedYear: state.workReducer.selectedYear,
		selectedWeek: state.workReducer.selectedWeek
	}
} 

function mapDispatchToProps(dispatch){
	return {
		userActions: bindActionCreators(userActions, dispatch),
		workActions: bindActionCreators(workActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);  