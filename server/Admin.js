import { Meteor } from 'meteor/meteor';
import { Mongo } from 'meteor/mongo';

export const Loans = new Mongo.Collection('loans');

// Define schema and methods for the Loans collection
// Loans.attachSchema(new SimpleSchema({ ... }));

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
    // Ensure the user is authenticated or authorized to fetch loans
    if (!this.userId) {
      throw new Meteor.Error('not-authorized', 'User is not authorized to fetch loans.');
    }

    // Fetch loans for the current user (borrower)
    const borrowerLoans = Loans.find({ borrowerId: this.userId }).fetch();

    return borrowerLoans;
  },

  'loans.getAllLoans'() {
    // Ensure the user is authenticated and is an admin
    if (!this.userId || !Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('not-authorized', 'User is not authorized to fetch all loans.');
    }

    // Fetch all loans (admin-only)
    const allLoans = Loans.find({}).fetch();

    return allLoans;
  },

  'loans.approveLoan'(loanId) {
    // Ensure the user is authenticated and is an admin
    if (!this.userId || !Roles.userIsInRole(this.userId, 'admin')) {
      throw new Meteor.Error('not-authorized', 'User is not authorized to approve loans.');
    }

    // Perform loan approval logic here (e.g., update the loan status)
    Loans.update(loanId, { $set: { status: 'approved' } });
  },

  // Add more admin-specific methods as needed
});

Meteor.publish('loans.allLoans', function () {
  // Ensure the user is authenticated and is an admin
  if (!this.userId || !Roles.userIsInRole(this.userId, 'admin')) {
    return this.ready();
  }

  // Publish all loans (admin-only)
  return Loans.find({});
});
