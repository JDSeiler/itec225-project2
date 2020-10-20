import React from 'react';
import styled from 'styled-components';
import TimerDisplay from './TimerDisplay';
import TimerControls from './TimerControls';
import PomodoroBlocks from './PomodoroBlocks';

const TimerWrapper = styled.div`
    flex: 2;
    background: darkgray;

    display: flex;
    justify-content: center;
    align-items: center;
`;

const TimerFlexContinaer = styled.div`
    display: flex;
    flex-direction: column;

    width: 85%;
    height: 75%;
    background: white;

    border-radius: 35px;

    box-shadow: 10px 10px 30px -10px rgba(0,0,0,0.75);
    -moz-box-shadow: 10px 10px 30px -10px rgba(0,0,0,0.75);
    -webkit-box-shadow: 10px 10px 30px -10px rgba(0,0,0,0.75);
`;

const Timer = () => {
    return(
        <TimerWrapper>
            <TimerFlexContinaer>
                <TimerDisplay/>
                <TimerControls/>
                <PomodoroBlocks/>
            </TimerFlexContinaer>
        </TimerWrapper>
    );
};

export default Timer;