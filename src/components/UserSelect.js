import React from 'react';
import OptionBuilder from '../components/common/OptionBuilder';
import * as Constants from '../common/constants';

const UserSelect = ({name, label, onChange, users, selectedUser}) => {

	function buildDisplayName(user){
		return user.username+" ("+user.email+")";
	}
	
	let labelStyle = {
		marginRight: "1em"
	}
	return (
		<div className="form-inline">
			<div className="form-group">
				<label htmlFor={name} className="control-label" style={labelStyle}>{label}</label>
				<select name={name} onChange={onChange} className="form-control">
					{
					    users.map(function(user) {
					    	return OptionBuilder({value: user.id, displayName: buildDisplayName(user)});
					        // return <option key={user.id} value={user.id}>{user.username} ({user.email})</option>;
					    })
				    }
				</select>
			</div>
		</div>
		
	);
};

export default UserSelect;

// {
// 					if (users){
// 						{users.map(buildOption)}
// 					}
// 				}

// class UserSelect extends React.Component {

// 	constructor(props, context){
// 		super(props, context);
// 		this.state = {
// 			users : this.props.users,
// 			selectedUser: {
// 				id: null,
// 				email: null,
// 				username: null
// 			}
// 		};
// 		this.selectUser = this.selectUser.bind(this);
// 	}


// 	render() {

// 	}
// }

// selectUser(id){
// 	this.setState({selectedUser: this.state.users.find(user => user.id == id)});
// }

// UserSelect.propTypes = {
// 	users: PropTypes.array.isRequired,
// 	selectedUser: PropTypes.object
// }

// funciton mapStateToProps(state, ownProps){
// 	\
// }

// export default connect(mapStateToProps)(UserSelect);

