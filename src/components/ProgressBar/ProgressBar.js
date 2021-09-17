import React from 'react';
import StyledProgressBar from './ProgressBar.styled';

const ProgressBar = (props) => {
	const allFields = Object.keys(props.allFields).length
	const progressValue = (props.progressError / allFields) * 100;

	return(
		<StyledProgressBar max='100' value={100 - progressValue} />
	)
}

export default ProgressBar;