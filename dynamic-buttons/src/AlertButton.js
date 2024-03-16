import React from 'react';

class AlertButton extends React.Component {
  handleClick = () => {
    alert(this.props.message);
  };

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.props.children}
      </button>
    );
  }
}

export default AlertButton;
