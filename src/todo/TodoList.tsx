import React from 'react';
import styled from 'styled-components';
import Header from './Header';
import SubmissionForm from './SubmissionForm';
import TaskArea from './TaskArea';

const TodoListWrapper = styled.div`
    flex: 1;
    background: grey;
    max-width: 33%;
    height: 100%;
`;

const TodoListFlexContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    height: 100%;
`;



type TaskData = {
    title: string,
    description: string | undefined
};

interface TodoListState {
    tasks: Array<TaskData>;
}

class TodoList extends React.Component<{}, TodoListState> {
    constructor(props: any) {
        super(props);
        this.state = {
            tasks: [
                {
                    title: 'This is Task 1, with a description',
                    description: 'Description here!'
                },
                {
                    title: 'This is Task 2, just a title!',
                    description: undefined
                },
                {
                    title: 'This is Task 3',
                    description: undefined
                },
            ]
        };

        this.addTask = this.addTask.bind(this);
    }

    addTask(task: TaskData) {
        this.setState((prevState) => {
            return {tasks: [...prevState.tasks, task]};
        });
    }
    
    render() {
        return (
            <TodoListWrapper>
                <TodoListFlexContainer>
                    <Header/>
                    <TaskArea taskList={this.state.tasks}/>
                    <SubmissionForm addTaskCallback={this.addTask}/>
                </TodoListFlexContainer>
            </TodoListWrapper>
        );

    }

};

export default TodoList;

