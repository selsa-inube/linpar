import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1000;

const validationSchema = Yup.object({
  email: validationRules.email.required(validationMessages.required),
  phone: validationRules.phone.required(validationMessages.required),
});

function GeneralInformationForm(props) {
  const {
    withSubmitButtons,
    currentInformation,
    handleSubmit,
    onHasChanges,
    readOnly,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const initialValues = {
    username: currentInformation.username,
    userID: currentInformation.userID,
    email: currentInformation.email,
    phone: currentInformation.phone || "",
    position: currentInformation.position || "",
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,

    onReset: () => {
      if (onHasChanges) onHasChanges(false);
    },

    onSubmit: () => {
      setLoading(true);

      setTimeout(() => {
        handleSubmit(formik.values);
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

  const hasChanges = (valueCompare) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleChangeForm = (event) => {
    const formikValues = {
      ...formik.values,
      [event.target.name]: event.target.value,
    };

    if (onHasChanges) onHasChanges(hasChanges(formikValues));
    formik.setFieldValue(event.target.name, event.target.value).then(() => {
      if (withSubmitButtons) return;
      formik.validateForm().then((errors) => {
        if (!errors || Object.keys(errors).length === 0) {
          handleSubmit(formikValues);
        }
      });
    });
  };

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
      hasChanges={hasChanges}
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={handleChangeForm}
      readOnly={readOnly}
    />
  );
}

export { GeneralInformationForm };
