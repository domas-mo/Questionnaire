import React from 'react';
import StyledHeader from './Header.styled';
import Paragraph from '../Paragraph/Paragrpah';
import Title from '../Title/Title';

const Header = (props) => {
    const paragraph = "Aenean neque elit, ullamcorper id dapibus vel, interdum quis quam. Morbi lacinia, lorem nec aliquet hendrerit, lectus massa commodo arcu, vitae volutpat libero felis tincidunt eros. Lorem ipsum dolor sit amet, consectetur adipiscing elit.";

    return (
        <StyledHeader>
            <Title>Welcome to our survey</Title>
            <Paragraph>{paragraph}</Paragraph>
            <button onClick={props.onClick} disabled={props.disabled} type="submit">{props.children}</button>
        </StyledHeader>
    )
}

export default Header