import React from "react";
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
	const {
		handleChange,
		handleSubmit,
		values,
		errors,
		counterCheckboxHandler,
		checkChosenGender,
	} = useForm(validate);

	const errorsCount = Object.keys(errors).length;

    return (
		!formSuccess ? (
				<StyledForm onSubmit={e => {
					handleSubmit(e);
					formSuccessHandler();

                    console.log(errors.length)
				}}>
                    <Title>Questionnaire</Title>
					<StyledFormDiv>
						<label htmlFor="firstName">
						<Input type="text" id="firstName" placeholder="First Name" name="firstName" value={values.firstName}
						       onChange={handleChange}/>
                        </label>
					</StyledFormDiv>
					{errors.firstName && <Errors name={errors.firstName}/>}
					<StyledFormDiv>
						<label htmlFor="lastName">
						<Input type="text" id="lastName" placeholder="Last name" name="lastName" value={values.lastName}
						       onChange={handleChange}/>
                        </label>
					</StyledFormDiv>
					{errors.lastName && <Errors name={errors.lastName}/>}
					<StyledFormDiv>
						<label htmlFor="emial">
						<Input type="email" id="email" placeholder="Email" name="email" value={values.email}
						       onChange={handleChange}/>
                        </label>
					</StyledFormDiv>
					{errors.email && <Errors name={errors.email}/>}
					<StyledFormDiv>
						<InputRadio checkChosenGender={checkChosenGender}/>
					</StyledFormDiv>
					{errors.gender && <Errors name={errors.gender}/>}
					<StyledFormDiv>
						{generateList(counterCheckboxHandler, dataListWay)}
					</StyledFormDiv>
					{errors.way && <Errors name={errors.way}/>}
					<StyledFormDiv>
						{generateList(counterCheckboxHandler, dataListMusic)}
					</StyledFormDiv>
					{errors.music && <Errors name={errors.music}/>}
					<ProgressBar progressError={errorsCount} allFields={values}/>
					<Button type="submit" disabled={errorsCount !== 0} >Submit</Button>
				</StyledForm>
		) : <Message/>
 
	);
};

export default Form; 