import React from 'react';
import styled from 'styled-components';

const PomodoroBlocksTitle = styled.h1`
    font-family: 'Roboto Condensed', sans-serif;
    text-align: center;
    padding-bottom: 1em;
`;

const PomodoroFlexContainer = styled.div`
    display: flex;
    flex-direction: row;

    justify-content: space-around;
`;

const PomodoroBlock = styled.div`
    width: 8em;
    height: 8em;
    border-radius: 15px;

    background: ${props => props.statusColor || 'darkred'};
`;


const PomodoroBlocks  = () => {
    return(
        <div>
            <PomodoroBlocksTitle>
                Your Pomodoros:
            </PomodoroBlocksTitle>
            <PomodoroFlexContainer>
                <PomodoroBlock statusColor="green"/>
                <PomodoroBlock statusColor="goldenrod"/>
                <PomodoroBlock/>
                <PomodoroBlock/>
            </PomodoroFlexContainer>
        </div>
    );
};

export default PomodoroBlocks;