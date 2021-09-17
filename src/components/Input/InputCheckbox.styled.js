import styled from "styled-components";

const StyledInputCheckbox = styled.div`
    display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: wrap;
	margin: 0.5rem;
	
  & input[type="checkbox"] {
    opacity: 0;
  }

  label {
    display: flex;
    justify-content: center;
    align-items: center;
    background: #e9eaee;
    border-radius: 10px;
    box-shadow: 6.31px 6.31px 26px #A3A4A7, -6.31px -6.31px 26px #FFFFFF;
    text-align: center;
    padding: .5rem;
  }

  input[type="checkbox"]:checked + label {
    border-radius: 14px;
    background: linear-gradient(145deg, #cacaca, #f0f0f0);
    box-shadow:  20px 20px 60px #bebebe,
             -20px -20px 60px #ffffff;
  }
	
	& span {
		padding: 0.4rem;
	}

`;

export default StyledInputCheckbox;