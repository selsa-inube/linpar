import * as Yup from "yup";
import { validationMessages } from "./validationMessages";
import { regex } from "./regularExpressions";

const validationRules = {
  username: Yup.string()
    .matches(regex.onlyLetters, validationMessages.onlyLetters)
    .min(8, validationMessages.minCharacters(8))
    .max(30, validationMessages.maxCharacters(30)),

  identification: Yup.string()
    .test(
      "testId",
      validationMessages.validIdentification,
      (value) => typeof value !== "undefined"
    )
    .min(5, validationMessages.minNumbers(5))
    .max(15, validationMessages.maxNumbers(15)),

  phone: Yup.string()
    .matches(regex.onlyNumbers, validationMessages.validPhone)
    .min(10, validationMessages.minNumbers(10))
    .max(10, validationMessages.maxNumbers(10)),

  email: Yup.string()
    .matches(regex.emailFormat, validationMessages.validEmail)
    .min(8, validationMessages.minCharacters(8))
    .max(80, validationMessages.maxCharacters(80)),

  password: Yup.string()
    .matches(regex.passwordFormat, validationMessages.validPassword)
    .min(8, validationMessages.minCharacters(8))
    .max(30, validationMessages.maxCharacters(30)),

  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), undefined], validationMessages.passwordMatch)
    .min(8, validationMessages.minCharacters(8))
    .max(30, validationMessages.maxCharacters(30)),
};

export { validationRules };
