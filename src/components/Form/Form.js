import React, {useState} from "react";
import Input from "../Input/Input";
import InputRadio from "../Input/InputRadio";
import Button from "../Button/Button";
import ProgressBar from "../ProgressBar/ProgressBar";
import Errors from "../Errors/Errors";
import Message from "../Message/Message";
import Title from "../Title/Title";

import generateList from "../../helpers/generateList";
import {dataListMusic} from "../../data/data";
import { dataListWay } from "../../data/data";

import StyledForm from "./Form.styled";
import StyledFormDiv from "./FormDiv.styled";

import useForm from "../../hooks/useForm";
import useFormSucess from "../../hooks/useFormSucess";
import validate from "../../helpers/validate";

const Form = () => {
    const [formSuccess, formSuccessHandler] = useFormSucess()
	const [error, setErrors] = useState({
		firstName: false,
		lastName: false,
		gender: false,
	});
	
	const {
		handleChange,
		handleSubmit,
		values,
		errors,
		counterCheckboxHandler,
		checkChosenGender,
	} = useForm(validate);

	const validateInputs = (e) => {
		if (e.target.value === "error")
		  setErrors({ ...error, [e.target.name]: true });
		else setErrors({ ...error, [e.target.name]: false });
	};
	
	const errorsCount = Object.keys(errors).length;

    return (
		!formSuccess ? (
				<StyledForm onSubmit={e => {
					handleSubmit(e);
					formSuccessHandler();
				}}>
                    <Title>Questionnaire</Title>
					<ProgressBar progressError={errorsCount} allFields={values}/>
					<StyledFormDiv>
						<label htmlFor="firstName">
						<Input type="text" id="firstName" placeholder="First Name" name="firstName" value={values.firstName}
						       onChange={handleChange} onBlur={validateInputs}/>
                        </label>
					</StyledFormDiv>
					{values.firstName && errors.firstName && <Errors name={errors.firstName}/>}
					<StyledFormDiv>
						<label htmlFor="lastName">
						<Input type="text" id="lastName" placeholder="Last name" name="lastName" value={values.lastName}
						       onChange={handleChange} onBlur={validateInputs}/>
                        </label>
					</StyledFormDiv>
					{values.lastName && errors.lastName && <Errors name={errors.lastName}/>}
					<StyledFormDiv>
						<label htmlFor="emial">
						<Input type="email" id="email" placeholder="Email" name="email" value={values.email}
						       onChange={handleChange}/>
                        </label>
					</StyledFormDiv>
					{values.email && errors.email && <Errors name={errors.email}/>}
					<StyledFormDiv>
						<InputRadio onBlur={validateInputs} checkChosenGender={checkChosenGender}/>
					</StyledFormDiv>
					{values.gender && errors.gender && <Errors name={errors.gender}/>}
					<StyledFormDiv>
						{generateList(counterCheckboxHandler, dataListWay, validateInputs)}
					</StyledFormDiv>
					{errors.way && <Errors name={errors.way}/>}
					<StyledFormDiv>
						{generateList(counterCheckboxHandler, dataListMusic, validateInputs)}
					</StyledFormDiv>
					{errors.music && <Errors name={errors.music}/>}
					<Button type="submit" disabled={errorsCount !== 0} >Submit</Button>
				</StyledForm>
		) : <Message/>
 
	);
};

export default Form; 