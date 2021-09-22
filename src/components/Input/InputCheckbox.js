import React from 'react';
import StyledInputCheckbox from './InputCheckbox.styled';
import useCheckbox from './../../hooks/useCheckbox';


const InputCheckbox = (props) => {
	const [checked, checkedHandler] = useCheckbox();

	const counterCheckedBoxes = () => {
		props.counterCheck(!checked ? 1 : -1);
	}

	return (
		<StyledInputCheckbox key={props.id + checked}>
			<input type="checkbox" name={props.name} onBlur={props.onBlur} id={props.text} checked={checked} onChange={checkedHandler} onClick={counterCheckedBoxes}/>
			<label htmlFor={props.text}>
				<span className={props.class}>
					{props.text}
				</span>
			</label>
		</StyledInputCheckbox>
	);
};

export default InputCheckbox; 