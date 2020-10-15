import React, { useState } from 'react';
import styled from 'styled-components';
import Task from './Task';

const TaskAreaWrapper = styled.div`
    flex: 7 0 0;
    overflow: auto;
    background: green;
    width: 100%;
`;

const TaskAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    background: honeydew;
`;

const TaskArea = () => {
    const dummyTasks = [
        {
            title: 'This is Task 1, with a description',
            description: 'Description here!'
        },
        {
            title: 'This is Task 2, just a title!'
        }
    ];


    // eslint-disable-next-line no-unused-vars
    const [tasks, setTasks] = useState(dummyTasks);
    return(
        <TaskAreaWrapper>
            <TaskAreaContainer>
                {tasks.map((element) => {
                    if (typeof element.description !== 'undefined') {
                        return (<Task title={element.title} description={element.description}/>);
                    } else {
                        return (<Task title={element.title}/>);
                    }
                })}
            </TaskAreaContainer>
        </TaskAreaWrapper>);
};


export default TaskArea;