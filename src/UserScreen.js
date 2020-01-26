import React, { Component } from 'react';
import NewMessage from './NewMessage';
import MessageList from './MessageList';
import PropTypes from 'prop-types';

class UserScreen extends Component {
  onMessage = message => {
    this.props.onAddingMessage(this.props.user.username, message);
  };

  render() {
    const { messages, user } = this.props;

    return (
      <div className="chat-window">
        <h2>Super Awesome Chat</h2>
        <div className="name sender">{user.username}</div>
        <MessageList messages={messages} user={user} />
        <NewMessage onAddingMessage={this.onMessage} />
      </div>
    );
  }
}

UserScreen.propTypes = {
  onAddingMessage: PropTypes.func.isRequired,
  user: PropTypes.object.isRequired,
  messages: PropTypes.array.isRequired,
};

export default UserScreen;