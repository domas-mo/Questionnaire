import React from 'react';
import StyledErrors from './Errors.styled';

const Errors = (props) => {
	return(
		<StyledErrors>{props.name}</StyledErrors>
	)
}

export default Errors;