import React from 'react';
import styled from 'styled-components';

const SubmissionFormContainer = styled.div`
    flex: 2 0 0;
    width: 100%;
    background: lightslategray;
`;

const Form = styled.form`
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-template-rows: 1fr 2fr;
    padding-left: 1em;
    padding-right: 1em;
    padding-top: 1em;

    column-gap: 0.5em;
    row-gap: 0.5em;
`;

const TitleField = styled.input`
    padding-right: 50px;
    font-size: 1em;
`;

const AddTaskButton = styled.input`
    -webkit-border-radius: 15px;
    -moz-border-radius: 15px;
    border-radius: 15px;
    height: 2.5em;
    font-size: 1.5em;
    background-color: #05763D;
    border-style: none;
    color: white;

    &:disabled {
        background-color: lightgrey;
        color: grey;
    }
`;

const DescriptionField = styled.textarea`
    grid-column-start: 1;
    grid-column-end: span 2;
    grid-row-start: 2;
    grid-row-end: 3;

    font-size: 1em;
    height: 100%;
    resize: none;
`;

interface FormState {
    title: string,
    desc: string
}

class SubmissionForm extends React.Component<{}, FormState> {
    constructor(props: any) {
        super(props);
        this.state = {
            title: '',
            desc: ''
        };

        this.handleTitleChange = this.handleTitleChange.bind(this);
        this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleTitleChange(event: any) {
        this.setState({...this.state, title: event.target.value});
    }

    handleDescriptionChange(event: any) {
        this.setState({...this.state, desc: event.target.value});
    }

    handleSubmit(event: any) {
        alert('Submitted: ' + this.state.title + ' ' + this.state.desc);

        event.preventDefault();
    }
    
    render() {
        return(<SubmissionFormContainer>
            <Form onSubmit={this.handleSubmit}>
                <TitleField id="title" 
                    required 
                    type="text" 
                    placeholder="Title" 
                    value={this.state.title} 
                    onChange={this.handleTitleChange}
                />
                <AddTaskButton type="submit" value="ADD TASK"/>
                <DescriptionField 
                    id="description" 
                    placeholder="Description (optional)" 
                    value={this.state.desc}
                    onChange={this.handleDescriptionChange}
                />
            </Form>
        </SubmissionFormContainer>);
    }
}


export default SubmissionForm;