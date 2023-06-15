import { useState } from "react";
import { GeneralInformationFormUI } from "./interface";
import { useFormik } from "formik";
import * as Yup from "yup";

const LOADING_TIMEOUT = 1000;

const validationSchema = Yup.object({
  email: Yup.string()
    .matches(
      /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/,
      "Este campo debe tener una dirección de correo electrónico válida"
    )
    .required("Este campo no puede estar vacío")
    .max(80, "Debe tener máximo 80 caracteres")
    .min(5, "Debe tener mínimo 5 caracteres"),

  phone: Yup.string()
    .matches(/^[0-9]*$/, "Este campo debe tener un número de teléfono válido")
    .required("Este campo no puede estar vacío")
    .max(10, "Debe tener 10 caracteres")
    .min(10, "Debe tener 10 caracteres"),
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
      phone: currentInformation.phone,
      position: currentInformation.position,
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
    />
  );
}

export { GeneralInformationForm };
