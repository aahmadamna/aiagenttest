import './styles.css';
import Link from 'next/link';
import { useState } from 'react';
import CommandProcessor from '../components/CommandProcessor'; // Correct import

function MyApp({ Component, pageProps }) {
  const [command, setCommand] = useState('');

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleSubmitCommand = () => {
    console.log('Command submitted:', command);

    // Define the codes and their corresponding actions
    const commandCodes = {
      '92848398KJKSDKJ': 'Open purchase tab',
      '742HJKSKK1209JI': 'Open previous purchases tab',
      '384JHKDFKJ29DSF': 'Open current inventory tab'
    };

    // Check if the submitted command matches any defined code
    const action = commandCodes[command];
    
    if (action) {
      console.log('Performing action:', action);
      // Implement logic to perform the corresponding action
    } else {
      console.log('Command not recognized.');
    }

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
        <CommandProcessor // Correct component usage
          value={command}
          onChange={handleCommandChange}
          onSubmit={handleSubmitCommand}
        />
      </div>
      <div className="container">
        {/* Remove duplicate input field */}
      </div>
      <div className="container page-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

