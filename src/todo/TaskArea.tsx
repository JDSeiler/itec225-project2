import React from 'react';
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


type TaskData = {
    title: string,
    description: string | undefined
};

type TaskAreaProps = {
    taskList: TaskData[]
};

const TaskArea = (props: TaskAreaProps) => {
    return(
        <TaskAreaWrapper>
            <TaskAreaContainer>
                {props.taskList.map((element: TaskData) => {
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