import React from 'react';
import styled from 'styled-components';
import DOORI from '../../img/DOORIBON.png';

const Img = styled.img`
    width: 30%;
    overflow : hidden;
    margin-top : 10%;
    @media (max-width : 349px) {
      width : 100%;
    }
`;

const Top = () => {
    return (
        <>
            <Img src={DOORI} />
        </>
    );
};

export default Top;