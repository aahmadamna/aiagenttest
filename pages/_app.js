import './styles.css';
import Link from 'next/link';
import { useState } from 'react';
import CommandInput from './CommandInput'; // Import the CommandInput component

function MyApp({ Component, pageProps }) {
  const [command, setCommand] = useState(''); // State to store the command

  // Function to handle command input change
  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  // Function to handle command submission
  const handleSubmitCommand = () => {
    // Implement logic to handle the submitted command
    console.log('Command submitted:', command);
    // Clear the command input field after submission
    setCommand('');
  };

  return (
    <div>
      <header>
        <div className="container">
          <h1>Welcome</h1>
        </div>
      </header>
      <div className="sidebar">
        {/* Sidebar content */}
        <nav>
          <ul>
            <li>
              <Link href="/purchase">Purchase</Link>
            </li>
            <li>
              <Link href="/previous-purchases">Previous-Purchases</Link>
            </li>
            <li>
              <Link href="/current-inventory">Current-Inventory</Link>
            </li>
            {/* Integrate the CommandInput component */}
            <li>
              <CommandInput
                value={command}
                onChange={handleCommandChange}
                onSubmit={handleSubmitCommand}
              />
            </li>
          </ul>
        </nav>
      </div>
      <div className="container">
        <div className="search-bar">
          <input
            type="text"
            placeholder="How can I help you?"
            value={command}
            onChange={handleCommandChange}
          />
          {/* Button to submit the command */}
          <button onClick={handleSubmitCommand}>Submit</button>
        </div>
      </div>
      <div className="container page-content">
        {/* Render the component */}
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

