import React from 'react';
import styled from 'styled-components';

const TimerWrapper = styled.div`
    flex: 2;
    background: darkgray;
`;

const Timer = () => {
    return(
        <TimerWrapper>
            <p>This is the timer over here somehwere</p>
        </TimerWrapper>
    );
};

export default Timer;