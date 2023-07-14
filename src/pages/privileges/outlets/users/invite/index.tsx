import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { InviteUI } from "./interface";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { IInviteFormValues } from "./types";

const LOADING_TIMEOUT = 1500;

const initialValues: IInviteFormValues = {
  name: "",
  id: "",
  phone: "",
  email: "",
};

const validationSchema = Yup.object({
  name: validationRules.username.required(validationMessages.required),
  id: validationRules.identification,
  phone: validationRules.phone.required(validationMessages.required),
  email: validationRules.email.required(validationMessages.required),
});

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormInvalid(false);
        setShowMessage(true);
        formik.resetForm();
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage(true);
        setFormInvalid(true);
      }
      formik.handleSubmit();
    });
  };

  const handleCloseSectionMessage = () => {
    setShowMessage(false);
  };

  return (
    <InviteUI
      loading={loading}
      formik={formik}
      formInvalid={formInvalid}
      showMessage={showMessage}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleSubmit={handleSubmit}
    />
  );
}

export { Invite };
