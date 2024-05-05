import './styles.css';
import Link from 'next/link';
import { useState } from 'react';
import CommandProcessor from '../components/CommandProcessor';
import { useRouter } from 'next/router'; // Import the useRouter hook

function MyApp({ Component, pageProps }) {
  const [command, setCommand] = useState('');
  const router = useRouter(); // Get the router object

  const handleCommandChange = (event) => {
    setCommand(event.target.value);
  };

  const handleSubmitCommand = () => {
    console.log('Command submitted:', command);

    // Define the codes and their corresponding actions
    const commandCodes = {
      '92848398KJKSDKJ': '/purchase',
      '742HJKSKK1209JI': '/previous-purchases',
      '384JHKDFKJ29DSF': '/current-inventory'
    };

    // Check if the submitted command matches any defined code
    const path = commandCodes[command];
    console.log('Path:', path); // Log the path
    
    // Check if the path is correctly assigned
    if (path) {
      console.log('Navigating to:', path); // Log the path
      router.push(path); // Navigate to the corresponding tab
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
        <CommandProcessor
          value={command}
          onChange={handleCommandChange}
          onSubmit={handleSubmitCommand}
        />
      </div>
      <div className="container page-content">
        <Component {...pageProps} />
      </div>
    </div>
  );
}

export default MyApp;

