import React, { useState } from "react";
import styled from "styled-components";
import Wrapper from "./Wrapper";
import load from '../../img/load.png';

import './Main.css';

const Progress = styled.div`
    position: relative;
    backgrond-color: #d8d8d8;
    text-align: center;
    font-family: 'spoqa-regular';
    border-radius: 20px;
    height: 600px;
    width: 80%;
    margin : 0 auto;
`;

const Done = styled.div`
    background: linear-gradient(to left, white, #6B8FF9);
    box-shadow: 0 3px 3px -5px #FF21D8, 0 2px 5px #6B8FF9;
    border-radius: 20px;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    hegiht: 100%;
    width: 0;
    opacity: 0;
    transition: 3s ease;
    margin-top: 10%;
`;

const Text = styled.span`
    font-size: 16px;
    color: black;
`;

const Image = styled.img`    
    display: block;
    margin-left: auto;
    margin-right: auto;
    width: 80%;
`;
const Inner = styled.div`
    position: absolute;
    width: 100%;
    margin: 0;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

const Loading = ({ done }) => {
    const [style, setStyle] = useState({});
    setTimeout(() => {
        const newStyle = {
            opacity: 1,
            width: `${done}%`
        }
        setStyle(newStyle);
    }, 300);
    return (
        <>
        <Progress>
            <Inner>
                <Image src={load} />
                <Text><br/>Test 결과 확인중</Text>
                <Done style={style}>{done}%</Done>
            </Inner>
        </Progress>
        </>
    );
};

export default Loading;