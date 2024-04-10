const authService = require('../services/authService.js'); // Path to your authService module

const testCreateUser = async () => {
  const email = 'test@example.com';
  const password = 'testpassword';
  const firstName = 'Test';
  const lastName = 'User';

  try {
    const user = await authService.createUser(email, password, firstName, lastName);
    console.log(user);
  } catch (err) {
    console.error(err.message);
  }
};
const testVerifyUser = async () => {
  const email = 'test@example.com';
  const password = 'testpassword';

  try {
    const user = await authService.verifyUser(email, password);
    console.log(user);
    console.log('User verified');
  } catch (err) {
    console.error(err.message);
  }
};

//testCreateUser();
testVerifyUser();

