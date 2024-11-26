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
    .min(6, "La contraseña debe tener al menos 6 caracteres.")
    .required("La contraseña es obligatoria."),
  confirmPassword: string()
    .oneOf([ref("password")], "Las contraseñas deben coincidir.")
    .min(6, "La confirmación de contraseña debe tener al menos 6 caracteres.")
    .required("La confirmación de contraseña es obligatoria."),
});

function RespondInvitation() {
  const { addFlag } = useFlag();
  const [loading, setLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const navigate = useNavigate();
  const [invitationId, setInvitationId] = useState<string>("");

  const location = useLocation();

  useEffect(() => {
    const fetchInvitationData = async () => {
      setLoading(true);
      try {
        const queryParams = new URLSearchParams(location.search);
        const token = queryParams.get("X-Token-Process");
        const data = await getSearchByToken(token || "");
        if (data) {
          setInvitationId(data.invitationId || "");
          const initialData = {
            userName: String(data.userName) || "",
            userIdentification: String(data.userIdentification) || "",
            userAccountId: String(data.userAccountId) || "",
            email: String(data.email) || "",
            phoneNumber: String(data.phoneNumber) || "",
            password: "",
            confirmPassword: "",
          };
          formik.setValues(initialData);
        }
      } catch (error) {
        console.error("Error fetching general Information:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchInvitationData();
  }, [location.search]);

  const formik = useFormik({
    initialValues: {
      userName: "",
      userIdentification: "",
      userAccountId: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
    },
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

  return (
    <RespondInvitationUI
      loading={loading}
      formik={formik}
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmit}
    />
  );
}

export { RespondInvitation };
