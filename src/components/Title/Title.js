import React from 'react';
import StyledTitle from './Title.styled';

const Title = (props) => {
	return (
		<StyledTitle id={props.id}>{props.children}</StyledTitle>
	);
};

export default Title; 