import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
    border: none;
    border-radius: 10px;
    height: 54px;
    width: ${props => props.width || "80%"};
    font-size: ${props => props.fontSize || "1.3em"};
    font-weight: ${props => props.weight || "bold"};
    padding: .5em .5em;
    background: ${props => props.background || "#ff855f"};
    color: ${props => props.color || "white"};
    outline: none;
`;

const Button = (props) => {
    return (
        <StyledButton {...props} />
    );
};

export default Button;