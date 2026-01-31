const ageValidator = (age) => {
  if (typeof age !== 'number') {
    return false;
  }

  if (age < 18 || age > 120) {
    return false;
  }

  return true;
};

export default ageValidator;
