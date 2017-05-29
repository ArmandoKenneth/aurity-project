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
					    })
				    }
				</select>
			</div>
		</div>
		
	);
};

export default UserSelect;