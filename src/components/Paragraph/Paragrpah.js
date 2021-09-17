import React from "react";
import StyledParagraph from "./Paragraph.styled";

const Paragraph = (props) => {
    return (
        <StyledParagraph>{props.children}</StyledParagraph>
    )
}

export default Paragraph;