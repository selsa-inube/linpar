import { useState } from "react";
import { GeneralInformationFormUI } from "./interface";
import { useFormik } from "formik";
import * as Yup from "yup";

const LOADING_TIMEOUT = 1000;

const validationSchema = Yup.object({
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Este campo debe tener un número de teléfono")
    .required("Este campo no puede estar vacío"),

  email: Yup.string()
    .matches(
      /^\w+([.-_+]?\w+)@\w+([.-]?\w+)(.\w{2,10})+$/i,
      "Este campo debe tener una dirección de correo electrónico válida"
    )
    .required("Este campo no puede estar vacío")
    .max(80, "Debe tener 80 maximo caracteres"),
});

function GeneralInformationForm(props) {
  const { allowSubmit, userData, handleChange } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const formik = useFormik({
    initialValues: {
      name: userData.name,
      identification: userData.identification,
      email: userData.email,
      phone: userData.phone,
      rol: userData.rol,
    },
    validationSchema,

    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormInvalid(false);
        setShowMessage(true);
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmit = () => {
    const submittedValues = {
      name: formik.values.name,
      identification: formik.values.identification,
      email: formik.values.email,
      phone: formik.values.phone,
      rol: formik.values.rol,
    };

    handleChange(submittedValues);

    if (!handleButtons) {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length > 0) {
          setShowMessage(true);
          setFormInvalid(true);
          return;
        } else {
          formik.handleSubmit();
        }
      });
    }
  };

  const handleButtons =
    formik.values.email === formik.initialValues.email &&
    formik.values.phone === formik.initialValues.phone &&
    formik.values.rol === formik.initialValues.rol;

  const handleCloseSectionMessage = () => {
    setShowMessage(false);
  };

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      showMessage={showMessage}
      allowSubmit={allowSubmit}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleButtons={handleButtons}
      formInvalid={formInvalid}
      handleSubmit={handleSubmit}
    />
  );
}

export { GeneralInformationForm };
