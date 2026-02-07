const phoneValidator = (phone) => {
  if (phone !== 'string') {
    return false;
  }

  const phonePattern = /^(\(?\d{2}\)?\s?)?(9?\d{4}[-.\s]?\d{4})$/;
  const matches = phonePattern.match(/\d{2}/);

  if (!phonePattern.test(phone)) {
    return false;
  }

  if (matches < 11 || matches > 99) {
    return false;
  }

  return true;
};

export default phoneValidator;
