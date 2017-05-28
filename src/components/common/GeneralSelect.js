import React from 'react';
import OptionBuilder from '../common/OptionBuilder';

const GeneralSelect = ({name, onChange, data, selectedValue}) => {

	return (
			<select name={name} onChange={onChange} value={selectedValue}>
				{
				    data.map(function(item) {
				    	return OptionBuilder({value: item.id, displayName: item.displayValue});
				    })
			    }
			</select>
	);
};

export default GeneralSelect;
