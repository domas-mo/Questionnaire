import React from 'react';
import StyledIputRadio from './InputRadio.styled';
import {genderList} from '../../data/data';

const InputRadio = (props) => {

	const list = genderList.map((item, index) => {
		return (
			<StyledIputRadio key={item.id}>
				<input type="radio" id={item.text} name={item.name} value={item.text} onChange={e => props.checkChosenGender(e, item.text)} />
				<label htmlFor={item.text}>{item.text}</label>
			</StyledIputRadio>
		);
	});

	return (
		<>
			{list}
		</>
	);
};

export default InputRadio; 