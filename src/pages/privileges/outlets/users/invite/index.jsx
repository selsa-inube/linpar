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
    .matches(/^[a-zA-Z\s]*$/, "Debe contener solo letras")
    .max(80, "Debe tener 80 caracteres o menos")
    .min(8, "Debe tener más de 8 caracteres")
    .required("Este campo debe contener un nombre"),

  id: Yup.string()
    .matches(
      /^[0-9]{5,15}$/,
      "Este campo debe contener un número de identificación válido"
    )
    .min(5, "Debe tener más de 5 caracteres")
    .max(15, "Debe tener 15 caracteres o menos")
    .test("id", "holoooo", (value) => !value.includes("-"))
    .required("Este campo debe contener un número de identificación"),

  phone: Yup.string()
    .matches(/^\d{10}$/, "Este campo debe tener un número de teléfono válido")
    .max(10, "Debe tener 10 caracteres")
    .required("Este campo debe contener un número de teléfono"),

  email: Yup.string()
    .matches(
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
      "Este campo debe tener una dirección de correo electrónico válida"
    )
    .max(80, "Debe tener 80 maximo caracteres")
    .required("Este campo debe contener una dirección de correo electrónico"),
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
