// validate form values for name and date of birth
const vaidateNameAndDOB = ({name, dob, identityPictures, identityNumber}) => {
  console.log(identityPictures)
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
  if (!identityPictures.front || !identityPictures.back) {
    errorStepOne.identityPictures = "Please upload front and back of your identity.";
  }
  if(!identityNumber) {
    errorStepOne.identityNumber = "Required";
  }
  return errorStepOne;
}

export default vaidateNameAndDOB;;