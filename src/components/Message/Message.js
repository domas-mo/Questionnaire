import React from 'react';
import StyledMessage from './Message.styled';
import Paragraph from '../Paragraph/Paragrpah';
import Title from '../Title/Title';

const Message = () => {
	const paragraph = "Aenean neque elit, ullamcorper id dapibus vel, interdum quis quam. Morbi lacinia, lorem nec aliquet hendrerit, lectus massa commodo arcu, vitae volutpat libero felis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";
 
	return (
		<StyledMessage>
			<Title>Thank you!</Title>
			<Paragraph>{paragraph}</Paragraph>
		</StyledMessage>
	);
};

export default Message;