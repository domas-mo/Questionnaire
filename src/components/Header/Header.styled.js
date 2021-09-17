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

const StyledHeader = styled.header`
    animation: ${opacity} 1.5s ease-in;
    margin: 200px auto;
    width: 50%;
    padding-bottom: 1.3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    background: #e9eaee;
    border-radius: 20px;
    box-shadow: 5.11px 5.11px 21px #777779, -5.11px -5.11px 21px #FFFFFF;
    
    button {
    margin: 0 auto;
    color: #185bf1;
    letter-spacing: 2px;
    font-size: 20px;
    padding: 20px 30px;
    cursor: pointer;
    border: none;
    background: #e9eaee;
    border-radius: 20px;
    box-shadow: 5.11px 5.11px 21px #777779, -5.11px -5.11px 21px #FFFFFF;

        &:hover {
            filter: brightness(0.9);
        }
    }
`

export default StyledHeader;