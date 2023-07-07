import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { clientsDataMock } from "@mocks/login/clients.mock";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { ErrorInvitationExpired } from "./cases/ErrorInvitationExpired";
import { ErrorNotAvailable } from "./cases/ErrorNotAvailable";
import { RespondInvitationUI } from "./interface";

const LOADING_TIMEOUT = 1000;

const validationSchema = Yup.object({
  email: validationRules.email.required(validationMessages.required),
  phone: validationRules.phone.required(validationMessages.required),
  username: validationRules.username.required(validationMessages.required),
  password: validationRules.password.required(validationMessages.required),
  confirmPassword: validationRules.confirmPassword.required(
    validationMessages.required
  ),
});

function RespondInvitation() {
  const { client_id, invitation_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const navigate = useNavigate();

  const getInvitationInformation = () => {
    return invitationEntriesDataMock.find(
      (invitation) => invitation.id === invitation_id
    );
  };

  const getClientData = () => {
    if (!client_id) return;
    return clientsDataMock.find(
      (clientMock) => clientMock.id === parseInt(client_id)
    );
  };

  const clientData = getClientData();
  const invitation = getInvitationInformation();

  const formik = useFormik({
    initialValues: {
      name: invitation?.username,
      userID: invitation?.userID,
      email: invitation?.email,
      phone: invitation?.phone,
      username: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    validateOnChange: false,

    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        navigate(
          `/respond-invitation/${client_id}/${invitation_id}/confirmation-register-complete`
        );
        setLoading(false);
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmitForm = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setFormInvalid(true);
      }
      formik.submitForm();
    });
  };

  if (!invitation || !clientData) {
    return <ErrorNotAvailable clientData={clientData} />;
  }

  if (invitation.status === "Sent") {
    return <ErrorInvitationExpired clientData={clientData} />;
  }

  return (
    <RespondInvitationUI
      clientData={clientData}
      loading={loading}
      formik={formik}
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

export { RespondInvitation };
