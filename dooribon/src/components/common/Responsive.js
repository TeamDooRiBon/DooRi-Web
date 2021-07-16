import React from 'react';
import styled from 'styled-components';

const ResponsiveBlock = styled.div`
  display: flex;
  align-items : center;
  justify-content: center;
  width: 350px;
  margin: 0 auto; /* 중앙 정렬 */
  @media (max-width : 349px) {
    width : 90%;
}
`;

const Responsive = ({ children, ...rest }) => {
    // style, className, onClick, onMouseMove 등의 props를 사용할 수 있도록
    // ...rest를 사용하여 ResponsiveBlock에게 전달
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};


export default Responsive;
