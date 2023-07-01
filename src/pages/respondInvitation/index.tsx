import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";
import { clientsDataMock } from "@src/mocks/login/clients.mock";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { ErrorInvitationExpired } from "./cases/ErrorInvitationExpired";
import { ErrorNotAvailable } from "./cases/ErrorNotAvailable";
import { RespondInvitationUI } from "./interface";

const LOADING_TIMEOUT = 1000;

const validationSchema = Yup.object({
  username: validationRules.username.required(validationMessages.required),
  email: validationRules.email.required(validationMessages.required),
  phone: validationRules.phone.required(validationMessages.required),
  userId: validationRules.identification.required(validationMessages.required),
  password: validationRules.password.required(validationMessages.required),
  confirmPassword: validationRules.confirmPassword.required(
    validationMessages.required
  ),
});

function RespondInvitation() {
  const { client_id, invitation_id } = useParams();
  const [loading, setLoading] = useState(false);

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
      username: invitation?.username,
      userID: invitation?.userID,
      email: invitation?.email,
      phone: "",
      password: "",
      confirmPassword: "",
    },
    validationSchema,
    validateOnChange: false,

    onSubmit: () => {
      setLoading(true);
      /* handleSubmit(formik.values); */
      setTimeout(() => {
        setLoading(false);
      }, LOADING_TIMEOUT);
    },
  });

  if (!invitation) {
    return <ErrorNotAvailable />;
  }

  if (invitation.status === "Pending") {
    return <ErrorInvitationExpired clientData={clientData} />;
  }

  return <RespondInvitationUI />;
}

export { RespondInvitation };
