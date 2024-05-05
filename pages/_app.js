import './styles.css';
import Link from 'next/link';
import { useState } from 'react';
import CommandInput from './CommandInput';
function MyApp({ Component, pageProps }) {
   const [command, setCommand] = useState('');

    // Function to handle the command input
    const handleCommandInput = (event) => {
        setCommand(event.target.value);
    };

    // Function to submit the command
    const submitCommand = () => {
        // Implement logic to process the command
        console.log('Command submitted:', command);
        // You can perform actions based on the command here
        // For now, let's just clear the command input
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
          </ul>
        </nav>
      </div>   
      <div className="container">
        <div className="search-bar">
             {/* Command input field */}
                    <input
                        type="text"
                        value={command}
                        onChange={handleCommandInput}
                        placeholder="Enter command..."
                    />
                    {/* Button to submit the command */}
                    <button onClick={submitCommand}>Submit</button>
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


