import './styles.css';
import Link from 'next/link';
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
             <input type="text" placeholder="How can I help you?" />
        </div>
      </div>
      <div className="container page-content">
        <Component {...pageProps} />
      </div>   
    </div>
  );
}
export default MyApp;


