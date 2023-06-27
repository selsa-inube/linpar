import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import { GeneralInformationFormUI } from "./interface";

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

  position: Yup.string().required("Debe seleccionar una opción"),
});

function GeneralInformationForm(props) {
  const { withSubmitButtons, currentInformation, handleSubmit, onHasChanges } =
    props;

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

    onReset: () => {
      onHasChanges(false);
    },

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

  const disabledButtons = (valueCompare) =>
    JSON.stringify(formik.initialValues) !== JSON.stringify(valueCompare);

  const handleChangeForm = (event) => {
    onHasChanges(disabledButtons(formik.values));
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
