import React from 'react';
import styled from 'styled-components';

const TaskAreaContainer = styled.div`
    flex-grow: 7;
    overflow: auto;
    background: green;
    width: 100%;
`;

const TaskArea = () => {
    return(<TaskAreaContainer>The scrolling area</TaskAreaContainer>);
};


export default TaskArea;