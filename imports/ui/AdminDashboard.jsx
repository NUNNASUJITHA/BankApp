import React, { useState } from 'react';
import TransactionList from './TransactionList'; // Import the TransactionList component
import './AdminDashboard.css'; // Import the CSS file

const AdminDashboard = () => {
  const [transactions, setTransactions] = useState([
    {
      id: 1,
      date: '2023-10-15',
      description: 'Payment from User A',
      amount: '$100.00',
    },
    {
      id: 2,
      date: '2023-10-14',
      description: 'Payment from User B',
      amount: '$75.00',
    },
    // Add more transaction data as needed
  ]);

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>
      <TransactionList transactions={transactions} />
    </div>
  );
};

export default AdminDashboard;
