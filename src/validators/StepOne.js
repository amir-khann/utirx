// validate form values for name and date of birth
const vaidateNameAndDOB = ({name, dob}) => {
  const errorStepOne = {
    name: '',
    dob: '',
  };
  if (!name) {
    errorStepOne.name = 'Please enter your name';
  }
  if (!dob) {
    errorStepOne.dob = 'Please enter your date of birth';
  }
  return errorStepOne;
}

export default vaidateNameAndDOB;;