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
			users: props.users
		}
	}

	constructor(props){
		super(props);
		this.state = this.buildStateFromProps(props);
		this.onChange = this.onChange.bind(this);
		this.onMonthChange = this.onMonthChange.bind(this);
		this.onYearChange = this.onYearChange.bind(this);
	}

	componentWillReceiveProps(nextProps){
		this.setState(this.buildStateFromProps(nextProps));
	}

	render() {
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
				<Calendar name="calendar" onChange={this.onChange} monthlyData={this.state.monthlyData} />
				<br/>
			</div>
		)
	}

	onChange(event){
		// this.setState({
		// 	selectedUser: this.props.users.filter(user => user.id == event.target.value)[0]
		// });
		const user = this.props.users.filter(user => user.id == event.target.value)[0];
		this.props.userActions.selectUser(user);
		this.props.workActions.getWorkByUser(user.id);
		this.setState({selectedUser: user});
	}

	onMonthChange(event){
		this.props.workActions.updateSelectedMonth(event.target.value);
		this.props.workActions.getWorkByUser(this.props.selectedUser.id, event.target.value, this.props.selectedYear);
		// this.setState({selectedMonth: this.state.selectedMonth, selectedYear: this.state.selectedYear});
		// console.log("month changed to: "+event.target.value);
	}

	onYearChange(event){
		this.props.workActions.updateSelectedYear(event.target.value);
		this.props.workActions.getWorkByUser(this.props.selectedUser.id, this.props.selectedMonth, event.target.value);
		// console.log("year changed to: "+event.target.value);
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
		selectedYear: state.workReducer.selectedYear
	}
} 

function mapDispatchToProps(dispatch){
	return {
		userActions: bindActionCreators(userActions, dispatch),
		workActions: bindActionCreators(workActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);  