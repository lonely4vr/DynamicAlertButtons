import React from 'react';
import AlertButton from './AlertButton';

class Toolbar extends React.Component {
  render() {
    const buttons = [
      { message: 'Downloading Your File!', children: 'Download File' },
      { message: 'Sharing Your Document!', children: 'Share Document' },
    ];

    return (
      <div>
        {buttons.map((button, index) => (
          <AlertButton
            key={index}
            message={button.message}
            children={button.children}
          />
        ))}
      </div>
    );
  }
}

export default Toolbar;
