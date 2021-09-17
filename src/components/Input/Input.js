import React from "react";
import StyledInput from "./Input.styled";

const Input = (props) => {
    return (
        <StyledInput   placeholder={props.placeholder} name={props.name} value={props.value}
                        onChange={props.onChange} onBlur={props.onBlur}/>
    )
}

export default Input;