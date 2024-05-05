// components/CommandInput.js

import React, { useState } from 'react';

const CommandInput = ({ onCommandSubmit }) => {
    const [command, setCommand] = useState('');

    const handleChange = (event) => {
        setCommand(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        onCommandSubmit(command);
        setCommand('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" value={command} onChange={handleChange} 
placeholder="Enter command..." />
            <button type="submit">Submit</button>
        </form>
    );
};

export default CommandInput;

