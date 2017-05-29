import React from 'react';

const OptionBuilder = ({value, displayName}) => {
	return (
		<option key={value} value={value}>{displayName}</option>
	);
};

export default OptionBuilder;