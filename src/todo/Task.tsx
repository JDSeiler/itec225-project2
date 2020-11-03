import React from 'react';
import styled from 'styled-components';

const TaskContainer = styled.div`
    align-self: flex-start;
    width: 100%;
    max-width: 100%;
    display: flex;
    justify-content: space-between;

    margin-bottom: 1em;

    -webkit-box-shadow: 0px 8px 14px 0px rgba(0,0,0,0.37);
    -moz-box-shadow: 0px 8px 14px 0px rgba(0,0,0,0.37);
    box-shadow: 0px 8px 14px 0px rgba(0,0,0,0.37);
`;

const TaskText = styled.div`
    flex-grow: 1;
    font-family: 'Roboto Condensed', sans-serif;
    padding-left: 1em;

    #title {
        font-weight: bold;
    }

    hr {
        max-width: 80%;
        margin: 0;
    }
`;

const Button = styled.div`
    justify-self: end;
    align-self: center;
    padding-right: 1em;
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

    // Only renders the description if it's a truthy value.
    // This works because logical operators in JS are expressions.
    return(
        <TaskContainer>
            <TaskText>
                <p id="title">{title}</p>
                {description && <hr></hr>}
                <p id="desc">{description}</p>
            </TaskText>
            <Button>
                <button id="delete" onClick={() => deleteSelfCallback(id)}>X</button>
            </Button>
        </TaskContainer>
    );
};

export default Task;