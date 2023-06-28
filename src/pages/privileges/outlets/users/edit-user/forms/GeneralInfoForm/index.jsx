import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { GeneralInformationFormUI } from "./interface";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";

const LOADING_TIMEOUT = 1000;

const validationSchema = Yup.object({
  email: validationRules.email.required(validationMessages.required),
  phone: validationRules.phone.required(validationMessages.required),
});

function GeneralInformationForm(props) {
  const { withSubmitButtons, currentInformation, handleSubmit } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const formik = useFormik({
    initialValues: {
      username: currentInformation.username,
      userID: currentInformation.userID,
      email: currentInformation.email,
      phone: currentInformation.phone || "",
      position: currentInformation.position || "",
    },
    validationSchema,

    onSubmit: () => {
      setLoading(true);
      handleSubmit(formik.values);
      setTimeout(() => {
        setFormInvalid(false);
        setLoading(false);
        setShowMessage(true);
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmitForm = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage(true);
        setFormInvalid(true);
      }
      formik.handleSubmit();
    });
  };

  const handleChangeForm = (event) => {
    formik
      .setFieldValue(event.target.name, event.target.value)
      .then((errors) => {
        if (withSubmitButtons) return;
        if (Object.keys(errors).length === 0) {
          handleSubmit({
            ...formik.values,
            [event.target.name]: event.target.value,
          });
        }
      });
  };

  const disabledButtons =
    JSON.stringify(formik.values) === JSON.stringify(formik.initialValues);

  const handleCloseSectionMessage = () => {
    setShowMessage(false);
  };

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      showMessage={showMessage}
      withSubmitButtons={withSubmitButtons}
      handleCloseSectionMessage={handleCloseSectionMessage}
      disabledButtons={disabledButtons}
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={handleChangeForm}
    />
  );
}

export { GeneralInformationForm };
