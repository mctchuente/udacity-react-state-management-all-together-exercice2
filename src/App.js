import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import UserScreen from './UserScreen';

/*
This exercise will help you practice many of your newly aquired React skills.

The instructions are included in the `instructions.md` file.
*/

const users = [{ username: 'Amy' }, { username: 'John' }];

class App extends Component {
  state = {
    messages: [
      { username: 'Amy', text: 'Hi, Jon!' },
      { username: 'Amy', text: 'How are you?' },
      { username: 'John', text: 'Hi, Amy! Good, you?' },
    ],
  };
  addingMessage = (username, message) => {
    const newMessage = {
      username: username,
      text: message,
    };
    this.setState(currentState => ({
      users: [...currentState.messages, newMessage],
    }));
  };

  render() {
    const { messages } = this.state;
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="container">
          {users.map(user => (
            <UserScreen
              key={user.username}
              user={user}
              messages={messages}
              onAddingMessage={this.addingMessage}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
