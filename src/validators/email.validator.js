import { BLACKLIST_EMAIL } from '../constants/blacklist.constants.js';

const emailValidator = (email) => {
  if (typeof email !== 'string') {
    return false;
  }

  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailValid.test(email)) {
    return false;
  }

  const domain = email.trim().split('@')[1];

  for (const item in BLACKLIST_EMAIL) {
    if (item === domain) {
      return false;
    }
  }

  return true;
};

export default emailValidator;
