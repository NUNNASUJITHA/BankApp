import React from 'react';
import './PastLoansList.css'; // Import the CSS file

const PastLoansList = ({ loans }) => {
  return (
    <ul className="past-loans">
      {loans.map((loan, index) => (
        <li key={index}>
          Amount: {loan.amount}, Reason: {loan.reason}
        </li>
      ))}
    </ul>
  );
};

export default PastLoansList;
