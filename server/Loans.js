import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Loans = new Mongo.Collection('loans');

// Define schema and methods for the Loans collection
// You can use packages like 'aldeed:simple-schema' and 'aldeed:collection2' for schema validation and autoform support.

// Example schema (modify as needed):
// Loans.attachSchema(new SimpleSchema({
//   amount: {
//     type: Number,
//     label: 'Loan Amount',
//   },
//   term: {
//     type: Number,
//     label: 'Loan Term (in months)',
//   },
//   interestRate: {
//     type: Number,
//     label: 'Interest Rate',
//   },
//   borrowerId: {
//     type: String,
//     label: 'Borrower ID',
//   },
// }));

Meteor.methods({
  'loans.createLoan'(loanData) {
    // Add server-side validation if needed
    // Ensure the user is authenticated or authorized to create a loan
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'User is not authorized to create a loan.');
    }

    // Create a new loan document in the collection
    const loanId = Loans.insert(loanData);

    return loanId;
  },

  'loans.getBorrowerLoans'() {
    // Ensure the user is authenticated or authorized to fetch their loans
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'User is not authorized to fetch loans.');
    }

    // Fetch loans for the current user (borrower)
    const borrowerLoans = Loans.find({ borrowerId: this.userId }).fetch();

    return borrowerLoans;
  },
});

Meteor.publish('loans.borrowerLoans', function () {
  // Ensure the user is authenticated or authorized to subscribe to their loans
  if (!this.userId) {
    return this.ready();
  }

  // Publish loans for the current user (borrower)
  return Loans.find({ borrowerId: this.userId });
});
