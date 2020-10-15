import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SubmissionForm from './SubmissionForm';
import TaskArea from './TaskArea';

const TodoListWrapper = styled.div`
    flex: 1;
    background: grey;
    max-width: 33%;
    height: 100%;
`;

const TodoListFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;

const TodoList = () => {
    return (
        <TodoListWrapper>
            <TodoListFlexContainer>
                <Header/>
                <TaskArea/>
                <SubmissionForm/>
            </TodoListFlexContainer>
        </TodoListWrapper>
    );
};

export default TodoList;

