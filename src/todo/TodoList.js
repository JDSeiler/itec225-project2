import React from 'react';
import styled from 'styled-components';
import Header from './Header.js';

const TodoListWrapper = styled.div`
    flex-grow: 1;
    background: grey;
    max-width: 33%;
`;

const TodoListFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TodoList = () => {
    return (
        <TodoListWrapper>
            <TodoListFlexContainer>
                <Header/>
            </TodoListFlexContainer>
        </TodoListWrapper>
    );
};

export default TodoList;

