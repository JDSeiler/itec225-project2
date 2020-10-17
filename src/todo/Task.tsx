import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    align-self: flex-start;
    padding-left: 1em;
    width: 90%;
    display: flex;
    justify-content: space-around;
`;

const TaskText = styled.div`
    flex-grow: 2;
`;

const Button = styled.div`
    justify-self: end;
    align-self: center;
    #delete {
        color: white;
        font-size: 1em;
        background: #911917;
        border-radius: 15px;
    }
`;

type TaskProps = {
    id: string,
    title: string,
    description?: string | null,
    deleteSelfCallback: Function,
};

const Task = ({id, title, description, deleteSelfCallback}: TaskProps) => {
    description = typeof description === 'undefined' ? null : description;

    return(
        <TaskContainer>
            <TaskText>
                <p>{title}</p>
                <p>{description}</p>
            </TaskText>
            <Button>
                <button id="delete" onClick={() => deleteSelfCallback(id)}>X</button>
            </Button>
        </TaskContainer>
    );
};

export default Task;