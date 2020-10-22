import React from 'react';
import styled from 'styled-components';

const ButtonsContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
`;

const ControlButton = styled.button`
    border-radius: 15px;
    border-style: none;
    -moz-border-radius: 15px;
    -webkit-border-radius: 15px;
    font-family: 'Roboto Condensed', sans-serif;
    font-weight: bold;
    font-size: 1.5em;

    height: 2.5em;
    width: 25%;
`;

const StartButton = styled(ControlButton)`
    background-color: #05763D;
    color: white;
`;

const StopButton = styled(ControlButton)`
    background-color: #a3202f;
    color: white;
`;

interface TimerControlsProps {
    startCallback: Function,
    resetCallback: Function,
    stopCallback: Function
}

const TimerControls  = (props: TimerControlsProps) => {
    return(
        <ButtonsContainer>
            <StartButton onClick={() => props.startCallback()}>Start</StartButton>
            <ControlButton onClick={() => props.resetCallback()}>Reset</ControlButton>
            <StopButton onClick={() => props.stopCallback()}>Stop</StopButton>
        </ButtonsContainer>
    );
};

export default TimerControls;