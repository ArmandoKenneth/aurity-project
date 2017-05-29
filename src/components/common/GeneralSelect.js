import React from 'react';
import OptionBuilder from '../common/OptionBuilder';

const GeneralSelect = ({name, onChange, data, selectedValue}) => {
	let selectStyle = {
		maxWidth: "85px"
	}
	return (
			<select name={name} onChange={onChange} value={selectedValue} style={selectStyle} className="form-control col-sm-1 col-md-1 col-lg-1 col-xs-1">
				{
				    data.map(function(item) {
				    	return OptionBuilder({value: item.id, displayName: item.displayValue});
				    })
			    }
			</select>
	);
};

export default GeneralSelect;
