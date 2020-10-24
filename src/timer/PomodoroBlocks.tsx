import React from 'react';
import styled from 'styled-components';
import { IntervalType } from './Timer';

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


const PomodoroBlock = styled.div<{ statusColor?: string }>`
    width: 8em;
    height: 8em;
    border-radius: 15px;

    background: ${props => props.statusColor || 'darkred'};
`;

interface PomodoroBlocksProps {
    pomodoroCount: number,
    intervalType: IntervalType
}

const determineBlockState = (pomodoroState: PomodoroBlocksProps, idx: number) => {
    if (idx > pomodoroState.pomodoroCount) {
        return 'darkred';
    } else if (idx === pomodoroState.pomodoroCount && pomodoroState.intervalType === IntervalType.WorkPeriod) {
        return 'goldenrod';
    } else {
        return 'green';
    }
};

const PomodoroBlocks = (props: PomodoroBlocksProps) => {
    return(
        <div>
            <PomodoroBlocksTitle>
                Your Pomodoros:
            </PomodoroBlocksTitle>
            <PomodoroFlexContainer>
                <PomodoroBlock statusColor={determineBlockState(props, 1)}/>
                <PomodoroBlock statusColor={determineBlockState(props, 2)}/>
                <PomodoroBlock statusColor={determineBlockState(props, 3)}/>
                <PomodoroBlock statusColor={determineBlockState(props, 4)}/>
            </PomodoroFlexContainer>
        </div>
    );
};

export default PomodoroBlocks;