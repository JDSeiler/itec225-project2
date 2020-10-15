import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    align-self: flex-start;
    margin-left: 1em;
`

type TaskProps = {
    title: string,
    description?: string | null
};

const Task = ({title, description}: TaskProps) => {
    console.log(description)
    description = typeof description === 'undefined' ? null : description;

    return(
        <TaskContainer>
            <p>{title}</p>
            <p>{description}</p>
        </TaskContainer>
    );
}

export default Task;