import React from 'react';
import styled from 'styled-components';
import Task from './Task';

const TaskAreaWrapper = styled.div`
    flex: 7 0 0;
    overflow: auto;
    width: 100%;
`;

const TaskAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

// Should be the same as the type in TodoList.tsx
// Didn't have time to centralize the type definitions
type TaskData = {
    id: string;
    title: string,
    description: string | undefined
};

type TaskAreaProps = {
    taskList: TaskData[],
    deleteTaskCallback: Function
};

const TaskArea = (props: TaskAreaProps) => {
    return(
        <TaskAreaWrapper>
            <TaskAreaContainer>
                {props.taskList.map((element: TaskData) => {
                    if (typeof element.description !== 'undefined') {
                        return (<Task 
                            key={element.id}
                            id={element.id} 
                            title={element.title} 
                            description={element.description} 
                            deleteSelfCallback={props.deleteTaskCallback}/>
                        );
                    } else {
                        return (<Task 
                            key={element.id}
                            id={element.id} 
                            title={element.title} 
                            deleteSelfCallback={props.deleteTaskCallback}/>
                        );
                    }
                })}
            </TaskAreaContainer>
        </TaskAreaWrapper>);
};


export default TaskArea;