import React, { useState } from 'react';
import './LoanRequestForm.css'; // Import the CSS file

const LoanRequestForm = ({ onSubmit }) => {
  const [loanAmount, setLoanAmount] = useState('');
  const [loanReason, setLoanReason] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const loanData = { amount: loanAmount, reason: loanReason };
    onSubmit(loanData);
    setLoanAmount('');
    setLoanReason('');
  };

  return (
    <form className="loan-request-form" onSubmit={handleSubmit}>
      <div>
        <label>Loan Amount:</label>
        <input
          type="number"
          value={loanAmount}
          onChange={(e) => setLoanAmount(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Loan Reason:</label>
        <input
          type="text"
          value={loanReason}
          onChange={(e) => setLoanReason(e.target.value)}
          required
        />
      </div>
      <button type="submit">Request Loan</button>
    </form>
  );
};

export default LoanRequestForm;
