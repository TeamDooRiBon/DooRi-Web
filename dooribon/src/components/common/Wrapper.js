import React from 'react';
import styled from 'styled-components';
import Responsive from './Responsive';

const WrapperDiv = styled(Responsive)`
    min-height: 100%;
`

const Wrapper = (props) => {
    return (
        <WrapperDiv {...props} />
    );
};

export default Wrapper;
