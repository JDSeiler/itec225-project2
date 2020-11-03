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

const IntervalDescription = styled(PomodoroBlocksTitle)`
    padding-bottom: 0;
`;

// styled-components allows you to pass simple arguments
// to components to dynamically generate styles.
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

/**
 * Uses the state (conceptually, not the literal state of the component) 
 * of the entire pomodoro timer and a number denoting a specific pomodoro
 * to compute what color the denoted block should be.
 * 
 * 
 * @param pomodoroState The props passed to the PomodoroBlocks component. See the
 * components documentation for details.
 * @param idx Which pomodoro this block represents in the whole Pomodoro sequence.
 * 1 for the first pomodoro, 2 for the second, etc. up to 4.
 */
const determineBlockState = (pomodoroState: PomodoroBlocksProps, idx: number) => {
    if (idx > pomodoroState.pomodoroCount) {
        // Completed count hasn't reached this index, block is read
        return 'darkred';
    } else if (idx === pomodoroState.pomodoroCount && pomodoroState.intervalType === IntervalType.WorkPeriod) {
        // Count matches the blocks index and we're working (in progress) - yellow
        return 'goldenrod';
    } else {
        // The only possibility left is the pomodoro is completed, so render it
        // as green.
        return 'green';
    }
};

/**
 * The "Pomodoro Blocks" are 4 colored blocks whose goal
 * is to help the user visualize where they are in the
 * Pomodoro sequence. Each block represents a single
 * Pomodoro. If a block is red, that Pomodoro has not 
 * started yet. If a block is yellow, the work period is
 * either waiting to be started or the work period is in
 * progress. If a block is green, that Pomodoro has been
 * completed.
 * 
 * @param props Information used by the PoodoroBlocks component
 * to calculate what color each block should be. See the defenition
 * of the interface for specific details.
 */
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
            {props.intervalType !== IntervalType.WorkPeriod ? 
                <IntervalDescription>Break Time!</IntervalDescription> : 
                <IntervalDescription>Get to work!</IntervalDescription>}
        </div>
    );
};

export default PomodoroBlocks;