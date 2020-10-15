import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const TaskAreaWrapper = styled.div`
    flex: 7 0 0;
    overflow: auto;
    background: green;
    width: 100%;
`;

const TaskAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: honeydew;
`;

const TaskArea = () => {    
    return(
        <TaskAreaWrapper>
            <TaskAreaContainer>
                <Task title="This is Task 1" description="This is the task description"></Task>
                <Task title="This is Task 2"></Task>
                <Task title="This is Task 3" description="Another thing with a description"></Task>
                <Task title="This is Task 4"></Task>
            </TaskAreaContainer>
        </TaskAreaWrapper>);
};


export default TaskArea;