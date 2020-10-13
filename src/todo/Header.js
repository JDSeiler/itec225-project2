import styled from 'styled-components';
import React from 'react';

const TodoListHeader = styled.div`
    background: red;
    height: 4.5em;
`;

const Header = () => {
    return(
        <TodoListHeader>
            This is the Header Div in Red
        </TodoListHeader>
    );
};

export default Header;