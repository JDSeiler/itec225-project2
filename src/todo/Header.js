import styled from 'styled-components';
import React from 'react';

const HeaderContainer = styled.div`
    height: 4.5em;
    font-family: 'Roboto Condensed', sans-serif;
    width: 100%;
    padding-left: 1em;
    align-self: flex-start;
    overflow: hidden;
    background: #DDDDDD;
`;

const Header = () => {
    return(
        <HeaderContainer>
            <h1>
                Your Tasks
            </h1>
        </HeaderContainer>
    );
};

export default Header;