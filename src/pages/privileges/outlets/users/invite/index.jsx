import { useState } from "react";
import { InviteUI } from "./interface";
import { useFormik } from "formik";
import * as Yup from "yup";

const LOADING_TIMEOUT = 1500;

const initialValues = {
  name: "",
  id: "",
  phone: "",
  email: "",
};

const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/(^[a-zA-Z])|(\s+[a-zA-Z])/g, "Debe contener solo letras")
    .max(80, "Debe tener 80 caracteres o menos")
    .min(8, "Debe tener más de 8 caracteres")
    .required("Este campo no puede estar vacío"),

  id: Yup.string()
    .matches(
      /^[0-9]{5,15}$/,
      "Este campo debe contener un número de identificación válido"
    )
    .required("Este campo no puede estar vacío"),

  phone: Yup.string()
    .matches(/^[0-9]{10}$/, "Este campo debe tener un número de teléfono")
    .required("Este campo no puede estar vacío"),

  email: Yup.string()
    .matches(
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
      "Este campo debe tener una dirección de correo electrónico válida"
    )
    .max(80, "Debe tener 80 maximo caracteres")
    .required("Este campo no puede estar vacío"),
});

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormInvalid(false);
        setShowMessage(true);
        formik.resetForm(formik.initialValues);
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage(true);
        setFormInvalid(true);
        return;
      } else {
        formik.handleSubmit();
      }
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
