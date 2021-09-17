import {useState, useEffect} from 'react';

const useForm = (validate) => {

	const initial = {
		firstName: '',
		lastName: '',
		email: '',
		checkMusic: 0,
		checkWay: 0,
		gender: false,
	};
	const [values, setValues] = useState(initial);
	const [errors, setErrors] = useState({});


	const counterCheckboxHandler = (value) => {
		setValues((prevState) => {
			return {...prevState, checkMusic: prevState.checkMusic + value, checkWay: prevState.checkWay + value};
		});
	};

	const checkChosenGender = (e, name) => {
		setValues((prevState) => {
			return {...prevState, gender: e.target.value === name};
		});
	};

	const handleChange = e => {
		const {name, value} = e.target;

		setValues({
			...values,
			[name]: value
		});

		if (values[name].length !== 0) {
			setErrors(validate(values));
		}

	};

	const handleSubmit = e => {
		e.preventDefault();
		setErrors(validate(values));

		if(Object.keys(errors).length === 0) {
			setValues(initial);
		}
	};

	useEffect(() => {
		setErrors(validate(values));
	}, [values, validate]);


	return {handleChange, handleSubmit, values, errors, counterCheckboxHandler, checkChosenGender};
};

export default useForm; 