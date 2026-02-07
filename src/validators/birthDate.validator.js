const birthDateValidator = (birthDate) => {
  if (typeof birthDate !== 'string') {
    return false;
  }

  const birthDatePattern = /^(\d{2})\/(\d{2})\/(\d{4})$/;

  if (!birthDatePattern.test(birthDate)) {
    return false;
  }

  const birthYear = Number(birthDate.split('/')[2]);
  const actualYear = new Date().getFullYear();

  if (birthYear > actualYear) {
    return false;
  }

  const result = actualYear - birthYear;

  return result > 18 ? true : false;
};

export default birthDateValidator;
