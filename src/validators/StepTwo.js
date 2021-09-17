import { PhoneNumberUtil } from "google-libphonenumber";
const phoneUtil = PhoneNumberUtil.getInstance();
//validate Email with regex, phonenumber with regex for usa, street address, zipcode, city, state and identity pictures as base64
const validateStepTwo = (values) => {
  const errors = {};
  const { email, phoneNumber, street, zipcode, city, state } =
    values;

  if (!email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
    errors.email = "Invalid email address";
  }

  if (!phoneNumber) {
    errors.phoneNumber = "Required";
  } else {
    try {
      const phoneNumberObject = phoneUtil.parse(phoneNumber, "US");
      if (!phoneUtil.isValidNumber(phoneNumberObject)) {
        errors.phoneNumber = "Enter a valid USA phone number";
      }
    } catch (err) {
      errors.phoneNumber = "Enter a valid USA phone number";
    }
  }

  if (!street) {
    errors.street = "Required";
  }

  if (!zipcode) {
    errors.zipcode = "Required";
  } else if (!/^\d{5}$/.test(zipcode)) {
    errors.zipcode = "Invalid zip code";
  }

  if (!city) {
    errors.city = "Required";
  }

  if (!state) {
    errors.state = "Required";
  }
  console.log(errors);

  return errors;
};
export default validateStepTwo;
