// validate form values for name and date of birth
const vaidateNameAndDOB = ({name, dob, identityPictures, identityNumber}) => {
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
  if (identityPictures?.length === 0 || !identityPictures) {
    errorStepOne.identityPictures = "Required";
  }
  if(!identityNumber) {
    errorStepOne.identityNumber = "Required";
  }
  return errorStepOne;
}

export default vaidateNameAndDOB;;