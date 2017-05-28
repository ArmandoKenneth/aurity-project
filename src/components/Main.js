import React from 'react';  
import {connect} from 'react-redux';  
import * as userActions from '../actions/userActions';
import * as workActions from '../actions/workActions';
import UserSelect from '../components/UserSelect';
import {bindActionCreators} from 'redux';
import PropTypes from 'prop-types';
import Calendar from '../components/Calendar';

class Main extends React.Component {  

	constructor(props){
		super(props);
		this.state = {
			selectedUser: this.props.selectedUser
		}
		this.onChange = this.onChange.bind(this);
	}

	render() {
		return(
			<div>
				Renderizou o Main: {this.props.users.length}
				<br/>
				<UserSelect
					name="userSelect" 
					label="User"
					onChange={this.onChange}
					users={this.props.users && this.props.users.length > 0 ? this.props.users : []} 
					/>
				<br/>
				{this.props.selectedUser ? this.props.selectedUser.email : ""}
				<Calendar name="calendar" onChange={this.onChange} monthlyData={this.props.monthlyData} />
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
	}

}


Main.propTypes = {
	users: PropTypes.array.isRequired
};

function mapStateToProps(state, ownProps) {
	return {
		users: state.userReducer.users,
		selectedUser: state.userReducer.selectedUser,
		monthlyData: state.workReducer.monthlyData
	}
} 

function mapDispatchToProps(dispatch){
	return {
		userActions: bindActionCreators(userActions, dispatch),
		workActions: bindActionCreators(workActions, dispatch)
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Main);  