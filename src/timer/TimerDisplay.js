import React from 'react';
import styled from 'styled-components';

const TimerTextWrapper = styled.div`
    text-align: center;
    font-family: 'Roboto Condensed', sans-serif;
    font-size: 4.5em;
    padding-top: 1.5em;
`;


const TimerDisplay = () => {
    let minutes = 12;
    let seconds = 35;
    return(
        <TimerTextWrapper>
            {`${minutes}:${seconds}`}    
        </TimerTextWrapper>
    );
};

export default TimerDisplay;