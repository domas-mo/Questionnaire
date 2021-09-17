import {useState} from 'react';

const useFormSucess = () => {
	const [formSuccess, setFormSuccess] = useState(false);

	const formSuccessHandler = () => {
		return !formSuccess ? setFormSuccess(true) : setFormSuccess(false);
	}

	return [formSuccess, formSuccessHandler]
}

export default useFormSucess; 