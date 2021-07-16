import React from 'react';
import styled from 'styled-components';
import DOORI from '../../img/DOORIBON.png';
import { Link } from 'react-router-dom';
import score from '../../contents/score';

const Img = styled.img`
    width: 30%;
    overflow : hidden;
    margin-top : 10%;
    @media (max-width : 349px) {
      width : 100%;
    }
`;

const Top = () => {
    const init = () => {
        score[0].fill(0);
        score[1].maxIdx = 0;
        score[1].maxScore = 0;
    };

    return (
        <>
            <Link to={`/`} onClick={() => init()} >
                <Img src={DOORI} />
            </Link>
        </>
    );
};

export default Top;