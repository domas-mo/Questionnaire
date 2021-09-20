import styled from "styled-components";

const StyledInputRadio = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	
	input[type="radio"] {
		opacity: 0;
	}
	
	label {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 10vw;
        height: 40px;
        background: #e9eaee;
        border-radius: 10px;
        box-shadow: 6.31px 6.31px 26px #A3A4A7, -6.31px -6.31px 26px #FFFFFF;
        text-align: center;
	}
	
	input[type="radio"]:checked + label {
    border-radius: 14px;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
	box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
	}
`;

export default StyledInputRadio;