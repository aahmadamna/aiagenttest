
import React, { useState } from 'react';
import { useRouter } from 'next/router';

const CommandProcessor = () => {
  const [command, setCommand] = useState('');
  const router = useRouter();

  // Function to handle command input
  const handleCommandInput = (event) => {
    setCommand(event.target.value);
  };

  // Function to process the command
  const processCommand = () => {
    // Define the codes and their corresponding actions
    const commandCodes = {
      'PURCHASE': '/purchase',
      'PREV-PURCHASE': '/previous-purchases',
      'CURRENT-INVENTORY': '/current-inventory'
    };

    // Check if the submitted command matches any defined code
    const path = commandCodes[command];
    
    if (path) {
      console.log('Navigating to:', path);
      router.push(path);
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



