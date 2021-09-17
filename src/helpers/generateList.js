import React from 'react';
import InputCheckbox from '../components/Input/InputCheckbox';

const generateList = (counterCheckboxHandler, list) => {

	const lists = list.map((item) => {
		return (
			<>
				<InputCheckbox name={item.name} counterCheck={counterCheckboxHandler} text={item.text} id={item.id} isCheck={item.isCheck}/>
			</>
		);
	});

	return lists;
};

export default generateList; 