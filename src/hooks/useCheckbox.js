import {useState} from 'react';

const useCheckbox = () => {

	const [checked, setIsChecked] = useState(false);

	const checkedHandler = (e) => {
		e.preventDefault();

		return !checked ? setIsChecked(true) : setIsChecked(false);
	}

	return[checked, checkedHandler];
}

export default useCheckbox;