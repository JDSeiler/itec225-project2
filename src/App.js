import React from 'react';
import styled from 'styled-components';
import Timer from './timer/Timer';
import TodoList from './todo/TodoList';

const AppContainer = styled.div`
    display: flex;
    align-items: stretch;
    height: 100%;
`;

const App = () => {
    return (
        <AppContainer>
            <TodoList/>
            <Timer/>
        </AppContainer>
    );
};

export default App;
