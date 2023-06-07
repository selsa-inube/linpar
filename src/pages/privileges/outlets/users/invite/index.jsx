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
    .min(8, "Debe tener más de 8 caracteres")
    .max(80, "Debe tener 80 caracteres o menos")
    .required("Este campo no puede estar vacio"),

  id: Yup.string()
    .matches(
      /^\d+[^Ee][^-+]\)*$/,
      "Este campo debe contener un número de identificación válido"
    )
    .min(5, "Debe tener más de 4 números")
    .max(15, "Debe tener 15 números o menos")
    .required("Este campo no puede estar vacio"),

  phone: Yup.string()
    .matches(
      /^\d+[^Ee][^-+]\)*$/,
      "Este campo debe tener un número de teléfono válido"
    )
    .min(10, "Debe tener 10 números")
    .max(10, "Debe tener 10 números")
    .required("Este campo no puede estar vacio"),

  email: Yup.string()
    .matches(
      /^(?:[^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*|"[^\n"]+")@(?:[^<>()[\].,;:\s@"]+\.)+[^<>()[\]\.,;:\s@"]{2,63}$/i,
      "Este campo debe tener una dirección de correo electrónico válida"
    )
    .max(80, "Debe tener 80 maximo caracteres")
    .required("Este campo no puede estar vacio"),
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
