// pages/index.js
import Link from 'next/link';

const Home = () => {
  return (
    <div>
      <h1>Welcome to Inventory Management System</h1>
      <ul>
        <li><Link href="/purchase">Purchase</Link></li>
        <li><Link href="/previous-purchases">Previous 
Purchases</Link></li>
        <li><Link href="/current-inventory">Current Inventory</Link></li>
      </ul>
    </div>
  );
};

export default Home;

