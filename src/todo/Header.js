import styled from 'styled-components';
import React from 'react';

const HeaderContainer = styled.div`
    background: red;
    height: 4.5em;
    align-self: flex-start;
    margin-left: 1em;
    overflow: hidden;
    width: 100%;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <h1>
                This is the header here in red.
            </h1>
        </HeaderContainer>
    );
};

export default Header;