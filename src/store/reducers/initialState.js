let currentUser;

if (localStorage.getItem('currentUser') === null) {
  currentUser = {};
} else {
  currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

export default {
  auth: {
    user: currentUser.user || {},
    isLoggedIn: false,
    isAdmin: false,
    error: null
  },
  userLoan: {
    loanDetails: {},
    error: null
  }
};
