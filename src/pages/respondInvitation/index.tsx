import { useFormik } from "formik";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { string, object, ref } from "yup";
import { getSearchByToken } from "@services/signupInvitations/searchByTokenUserSignupInvitation";
import { useFlag } from "@inubekit/flag";
import { EAppearance } from "@src/types/colors.types";
import { messageInvitationSentConfig } from "../privileges/outlets/users/invite/config/messageInvitationSent.config";
import { RespondInvitationUI } from "./interface";
import { invitation } from "./utils";

const LOADING_TIMEOUT = 1000;

const validationSchema = object({
  password: string()
    .min(1, "La contraseña debe tener al menos 1 carácter.")
    .max(6, "La contraseña no puede tener más de 6 caracteres.")
    .required("La contraseña es obligatoria."),
  confirmPassword: string()
    .oneOf([ref("password")], "Las contraseñas deben coincidir.")
    .min(1, "La confirmación de contraseña debe tener al menos 1 carácter.")
    .max(6, "La confirmación de contraseña no puede tener más de 6 caracteres.")
    .required("La confirmación de contraseña es obligatoria."),
  userAccountId: string()
    .min(1, "El ID de cuenta debe tener al menos 1 carácter.")
    .max(6, "El ID de cuenta no puede tener más de 6 caracteres.")
    .required("El ID de cuenta es obligatorio."),
});

function RespondInvitation() {
  const { addFlag } = useFlag();
  const [loading, setLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const navigate = useNavigate();
  const [invitationId, setInvitationId] = useState<string>("");
  const isFormUnchanged = () => {
    return JSON.stringify(formik.values) === JSON.stringify(initialValues);
  };
  const isFormValidAndChanged = () => {
    const hasErrors = Object.keys(formik.errors).length > 0;
    const allFieldsFilled = Object.values(formik.values).every(
      (value) => value.trim() !== ""
    );
    return !hasErrors && allFieldsFilled && !isFormUnchanged();
  };

  const location = useLocation();
  useEffect(() => {
    const fetchInvitationData = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("X-Token-Process");

        if (!token) {
          navigate("/error-invitation-expired");
          return;
        }

        const data = await getSearchByToken(token);

        if (!data || !data.invitationId) {
          navigate("/error-invitation-expired");
          return;
        }

        setInvitationId(data.invitationId || "");
        setInitialValues({
          userName: String(data.userName) || "",
          userIdentification: String(data.userIdentification) || "",
          userAccountId: String(data.userAccountId) || "",
          email: String(data.email) || "",
          phoneNumber: String(data.phoneNumber) || "",
          password: "",
          confirmPassword: "",
        });
        formik.setValues({
          userName: String(data.userName) || "",
          userIdentification: String(data.userIdentification) || "",
          userAccountId: String(data.userAccountId) || "",
          email: String(data.email) || "",
          phoneNumber: String(data.phoneNumber) || "",
          password: "",
          confirmPassword: "",
        });
      } catch (error) {
        console.error("Error fetching invitation data:", error);
        navigate("/error-invitation-expired");
      } finally {
        setLoading(false);
      }
    };

    fetchInvitationData();
  }, [location.search]);

  const [initialValues, setInitialValues] = useState({
    userName: "",
    userIdentification: "",
    userAccountId: "",
    email: "",
    phoneNumber: "",
    password: "",
    confirmPassword: "",
  });

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        invitation(formik.values, invitationId);
        addFlag({
          title: messageInvitationSentConfig.success.title,
          description: messageInvitationSentConfig.success.description,
          appearance: EAppearance.SUCCESS,
          duration: 5000,
        });
        formik.resetForm();
        setTimeout(() => {
          navigate(`/confirmation-register-complete`);
        }, 5000);
      }, LOADING_TIMEOUT);
    },
    enableReinitialize: true,
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setFormInvalid(true);
        addFlag({
          title: messageInvitationSentConfig.failed.title,
          description: messageInvitationSentConfig.failed.description,
          appearance: EAppearance.DANGER,
          duration: 5000,
        });
      } else {
        formik.handleSubmit();
      }
    });
  };
  const handleCancel = () => {
    formik.resetForm({ values: initialValues });
  };

  return (
    <RespondInvitationUI
      loading={loading}
      formik={formik}
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmit}
      handleCancel={handleCancel}
      isFormUnchanged={isFormUnchanged()}
      isFormValidAndChanged={isFormValidAndChanged()}
    />
  );
}

export { RespondInvitation };
