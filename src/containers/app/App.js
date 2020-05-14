import React, { Component } from 'react';
import Button from '../../components/button';
import Input from '../../components/input';
import List from '../../components/list';

class App extends Component {
    state = {
        input: ''
    };

    handleOnChange = (event) => {
        console.log('It was changed', event.target.value);
    }

    handleOnClick = () => {
        console.log('It was clicked');
    }

    render() {
        return (
            <div>
                <List todoList={[]} />
                <Input onChange={(event) => this.handleOnChange(event)}></Input>
                <Button onClick={() => this.handleOnClick()}>Adicionar</Button>
            </div>
        )
    }
}
export default App;