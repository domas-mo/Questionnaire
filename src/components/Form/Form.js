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
	const initial = {
		firstName: false,
		lastName: false,
		email: false, 
		gender: false,
		music: false,
		way: false,
	}

    const [formSuccess, formSuccessHandler] = useFormSucess()
	const [flag, setFlag] = useState(initial)

	const {
		handleChange,
		handleSubmit,
		values,
		errors,
		counterCheckboxHandler,
		checkChosenGender,
	} = useForm(validate);

	const validateInputs = (e) => {
		if (errorsCount > 0) {
			setFlag({ ...flag, [e.target.name]: true });
		} else  {
			setFlag({ ...flag, [e.target.name]: false });
		}
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
					{flag.firstName ? errors.firstName && <Errors name={errors.firstName}/> : null}
					<StyledFormDiv>
						<label htmlFor="lastName">
						<Input type="text" id="lastName" placeholder="Last name" name="lastName" value={values.lastName}
						       onChange={handleChange} onBlur={validateInputs}/>
                        </label>
					</StyledFormDiv>
					{flag.lastName ? errors.lastName && <Errors name={errors.lastName}/> : null}
					<StyledFormDiv>
						<label htmlFor="emial">
						<Input type="email" id="email" placeholder="Email" name="email" value={values.email}
						       onChange={handleChange} onBlur={validateInputs}/>
                        </label>
					</StyledFormDiv>
					{flag.email ? errors.email && <Errors name={errors.email}/> : null}
					<StyledFormDiv>
						<InputRadio checkChosenGender={checkChosenGender}/>
					</StyledFormDiv>
					{flag.gender ? errors.gender && <Errors name={errors.gender}/> : null}
					<StyledFormDiv>
						{generateList(counterCheckboxHandler, dataListWay)}
					</StyledFormDiv>
					{flag.way ? errors.way && <Errors name={errors.way}/> : null}
					<StyledFormDiv>
						{generateList(counterCheckboxHandler, dataListMusic)}
					</StyledFormDiv>
					{flag.music ? errors.music && <Errors name={errors.music}/> : null}
					<Button type="submit" onClick={(e) => {
						if(errorsCount > 0 && e.target.type === "submit") {
							setFlag({ ...flag, firstName: true, lastName: true, email: true, gender: true, way: true, music: true});
						}
					}}>Submit</Button>
				</StyledForm>
		) : <Message/>
 
	);
};

export default Form; 