import styled from 'styled-components';

const StyledProgressBar = styled.progress`
	&[value] {
    margin: 10px 20px;
    width: 35vw;
    height: 50px;
    position: sticky;
  }
`;

export default StyledProgressBar;