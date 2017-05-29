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
		if (nextProps.monthlyData.weeks.length > 0 && this.state.selectedWeek == -1){
			this.props.workActions.updateSelectedWeek(nextProps.monthlyData.weeks[0].week_id);
		}
		// if (!nextProps.monthlyData || !nextProps.monthlyData.initialized){
		// 	this.props.workActions.getWorkByUser(nextProps.selectedUser.id, nextProps.selectedMonth, nextProps.selectedYear);
		// }
	}

	render() {

		let actionButtons = null;
		if (this.state.selectedWeek > -1){
			actionButtons = <div>
				<button onClick={this.onApprove} className="btn btn-primary">Accept</button>
				<button onClick={this.onReject} className="btn btn-danger">Reject</button>
			</div>
		}

		return(
			<div>
				Renderizou o Main: {this.state.users.length}
				<br/>
				<UserSelect
					name="userSelect" 
					label="User"
					onChange={this.onChange}
					users={this.state.users && this.state.users.length > 0 ? this.state.users : []} 
					/>
				<br/>
				{this.state.selectedUser ? this.state.selectedUser.email : ""}
				<br/>
				<GeneralSelect name="monthSelect" onChange={this.onMonthChange} data={Constants.MONTHS} selectedValue={this.state.selectedMonth} />
				<GeneralSelect name="yearSelect" onChange={this.onYearChange} data={Constants.YEARS} selectedValue={this.state.selectedYear}/>
				<br/>
				({this.state.selectedMonth}/{this.state.selectedYear})
				<br/>
				<Calendar name="calendar" onClick={this.onClickWeek} monthlyData={this.state.monthlyData} />
				<br/>
				{this.state.selectedWeek}
				{actionButtons}
		
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
		this.props.workActions.updateSelectedWeek(event.target.className);
		// console.log(event.target.className);
	}

	onApprove(event){
		// console.log("Vou aprovar")
		this.props.workActions.changeWeekStatus(this.state.selectedWeek, 1, "approved");
	}

	onReject(event){
		// console.log("Vou aprovar")
		this.props.workActions.changeWeekStatus(this.state.selectedWeek, 1, "rejected");
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