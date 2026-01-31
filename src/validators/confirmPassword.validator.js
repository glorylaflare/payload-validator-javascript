const confirmPasswordValidator = (password, confirmPassword) => {
  if (typeof password !== 'string' || typeof confirmPassword !== 'string') {
    return false;
  }

  return password === confirmPassword;
};

export default confirmPasswordValidator;
