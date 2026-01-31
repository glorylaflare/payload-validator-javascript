const confirmPasswordValidator = (password, confirmPassword) => {
  if (typeof confirmPassword !== 'string') {
    return false;
  }

  return password === confirmPassword;
};

export default confirmPasswordValidator;
