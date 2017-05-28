import React from 'react';

const OptionBuilder = ({value, displayName}) => {
	return (
		<option key={value} value={value}>{displayName}</option>
	);
};

// const OptionBuilder = ({item}) => {
// 	return (
// 		<option key={item.value} value={item.value}>{item.displayName}</option>
// 	);
// };

export default OptionBuilder;