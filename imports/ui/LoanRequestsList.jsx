import React from 'react';
import './LoanRequestsList.css'; // Import the CSS file

const LoanRequestsList = ({ loanRequests, onApprove, onReject }) => {
  return (
    <ul className="loan-requests-list">
      {loanRequests.map((loan, index) => (
        <li key={index}>
          <div>
            <strong>Borrower: {loan.borrower}</strong>
          </div>
          <div>Amount: {loan.amount}</div>
          <div>Reason: {loan.reason}</div>
          <div>
            <button onClick={() => onApprove(loan.id)}>Approve</button>
            <button onClick={() => onReject(loan.id)}>Reject</button>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default LoanRequestsList;
