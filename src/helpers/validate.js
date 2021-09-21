export default function validate(values) {
	let errors = {};

	if (!values.firstName.trim()) {
		errors.firstName = 'Please complete the name!';
	} else if (Object.keys(values.firstName).length < 2) {
		errors.firstName = 'Please complete the name!';
	}

	if (!values.lastName.trim()) {
		errors.lastName = 'Please complete the last name!';
	} else if (Object.keys(values.lastName).length < 2) {
		errors.lastName = 'Please complete the last name!';
	}

	if (!values.email.trim()) {
		errors.email = 'Please complete the email!';
	} else if (!/\S+@\S+\.\S+/.test(values.email)) {
		errors.email = 'Email address is invalid!';
	}

	if(!values.gender) {
		errors.gender = 'Please choose gender! '
	}

	if(values.checkMusic < 4) {
		errors.music = 'Please choose at least 3 type of music you listen to'
	}

	if(values.checkWay < 1) {
		errors.way = 'Please choose at least 1 type way to listen to music'
	}

	return errors;
}