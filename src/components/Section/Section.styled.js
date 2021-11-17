import styled, { keyframes } from "styled-components";

const opacity = keyframes`
    0% {
        display: none;
        opacity: 0;
    }

    100% {
        display: block;
        opacity: 1;
    }
`;

const StyledSection = styled.section`
    animation: ${opacity} 2s ease-in;
    margin: 20px auto;
    width: 50vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #e9eaee;
    border-radius: 20px;
    box-shadow: 5.11px 5.11px 21px #777779, -5.11px -5.11px 21px #FFFFFF;
    transition: 2s ease-in-out;
`;

export default StyledSection;