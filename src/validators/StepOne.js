// validate form values for name and date of birth
const vaidateNameAndDOB = ({firstName, lastName, dob, identityPictures, identityNumber}) => {
  console.log(identityPictures)
  const errorStepOne = {
    name: '',
    dob: '',
  };
  if (!firstName) {
    errorStepOne.firstName = 'Please enter your first name';
  }
  if (!lastName) {
    errorStepOne.lastName = 'Please enter your last name';
  }
  if (!dob) {
    errorStepOne.dob = 'Please enter your date of birth';
  }
  if (!identityPictures || !identityPictures.front || !identityPictures.back) {
    errorStepOne.identityPictures = "Please upload front and back of your identification document.";
  }
  if(!identityNumber) {
    errorStepOne.identityNumber = "Required";
  }
  return errorStepOne;
}

export default vaidateNameAndDOB;;
