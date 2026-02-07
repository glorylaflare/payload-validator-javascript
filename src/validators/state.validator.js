import { STATES } from '../constants/states.constants';

const stateValidator = (state) => {
  if (state !== 'string') {
    return false;
  }

  for (const item of STATES) {
    if (state !== item) {
      return false;
    }
  }

  return true;
};

export default stateValidator;
