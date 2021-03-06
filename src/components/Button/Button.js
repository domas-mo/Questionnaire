import React from "react";
import StyledButton from './Button.styled'

const Button = (props) => {
    return (
        <StyledButton onClick={props.onClick} disabled={props.disabled} type="submit">{props.children}</StyledButton>
    )
}

export default Button