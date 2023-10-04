import React, { useState } from 'react';
import './BorrowerDashboard.css'; // Import the CSS file
import LoanRequestForm from './LoanRequestForm';
import PastLoansList from './PastLoansList';

const Dashboard = () => {
  const [pastLoans, setPastLoans] = useState([{amount:5000,reason:"home loan"},{amount:5000,reason:"home loan"}]);
  const [showLoanRequestForm, setShowLoanRequestForm] = useState(false);

  const handleLoanRequest = (loanData) => {
    // Assuming you have a backend API to handle loan requests.
    // Send a POST request to the API to request a loan.
    // After a successful request, you can update the pastLoans state.
    // Example:
    // axios.post('/api/loans', loanData)
    //   .then((response) => {
    //     setPastLoans([...pastLoans, response.data]);
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="dashboard">
      <h2>Dashboard</h2>
      <button onClick={() => setShowLoanRequestForm(!showLoanRequestForm)}>
        {showLoanRequestForm ? 'Cancel Loan Request' : 'Request a Loan'}
      </button>
      {showLoanRequestForm && <LoanRequestForm onSubmit={handleLoanRequest} />}
      <h3>Past Loans</h3>
      <PastLoansList loans={pastLoans} />
    </div>
  );
};

export default Dashboard;
