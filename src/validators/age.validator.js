const ageValidator = (age) => {
  if (age === null || age === undefined) {
    return false;
  }

  if (typeof age !== 'number') {
    return false;
  }

  if (age < 18 || age > 120) {
    return false;
  }

  return true;
};

export default ageValidator;
