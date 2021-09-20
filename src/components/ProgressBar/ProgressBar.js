import React from 'react';
import StyledProgressBar from './ProgressBar.styled';
import StyledDiv from './Div.styled';


const ProgressBar = (props) => {
	const allFields = Object.keys(props.allFields).length
	const progressValue = (props.progressError / allFields) * 100;

	return(
		<StyledDiv>
			<p>Progress</p>
			<StyledProgressBar max='100' value={100 - progressValue} />
		</StyledDiv>
	)
}

export default ProgressBar;