import React, { useState } from 'react';

const CommandProcessor = ({ setActiveTab }) => {
  const [command, setCommand] = useState('');

  // Function to handle command input
  const handleCommandInput = (event) => {
    setCommand(event.target.value);
  };

  // Function to process the command
  const processCommand = () => {
    // Define the codes and their corresponding actions
    const commandCodes = {
      '92848398KJKSDKJ': 'purchase',
      '742HJKSKK1209JI': 'previous-purchases',
      '384JHKDFKJ29DSF': 'current-inventory'
    };

    // Check if the submitted command matches any defined code
    const action = commandCodes[command];
    
    if (action) {
      console.log('Performing action:', action);
      setActiveTab(action); // Set active tab based on the command
    } else {
      console.log('Command not recognized.');
    }

    // Reset command input field
    setCommand('');
  };

  return (
    <div>
      {/* Command input field */}
      <input
        type="text"
        value={command}
        onChange={handleCommandInput}
        placeholder="Enter command..."
      />
      {/* Button to submit the command */}
      <button onClick={processCommand}>Submit</button>
    </div>
  );
};

export default CommandProcessor;


