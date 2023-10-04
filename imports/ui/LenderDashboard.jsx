import React, { useState } from 'react';
import './LenderDashboard.css'; // Import the CSS file
import LoanRequestsList from './LoanRequestsList';

const LenderDashboard = () => {
  const [loanRequests, setLoanRequests] = useState([{amount:6000,reason:"Bike loan",borrower:"syam",id:123}]);

  const handleApproveLoan = (loanId) => {
    // Assuming you have a backend API to approve loan requests.
    // Send a POST request to the API to approve the loan.
    // After a successful request, you can update the loanRequests state.
    // Example:
    // axios.post(`/api/loans/${loanId}/approve`)
    //   .then(() => {
    //     // Update loanRequests state
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  const handleRejectLoan = (loanId) => {
    // Assuming you have a backend API to reject loan requests.
    // Send a POST request to the API to reject the loan.
    // After a successful request, you can update the loanRequests state.
    // Example:
    // axios.post(`/api/loans/${loanId}/reject`)
    //   .then(() => {
    //     // Update loanRequests state
    //   })
    //   .catch((error) => {
    //     console.error(error);
    //   });
  };

  return (
    <div className="lender-dashboard">
      <h2>Lender Dashboard</h2>
      <h3>Loan Requests</h3>
      <LoanRequestsList
        loanRequests={loanRequests}
        onApprove={handleApproveLoan}
        onReject={handleRejectLoan}
      />
    </div>
  );
};

export default LenderDashboard;
