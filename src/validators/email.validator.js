import { BLACKLIST_EMAIL } from '../constants/blacklist.constants.js';

const emailValidator = (email) => {
  if (typeof email !== 'string') {
    return false;
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailPattern.test(email)) {
    return false;
  }

  const domain = email.split('@')[1];

  for (const item of BLACKLIST_EMAIL) {
    if (item === domain) {
      return false;
    }
  }

  return true;
};

export default emailValidator;
