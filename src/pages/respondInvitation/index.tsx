import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations.mock";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useState } from "react";
import { useParams } from "react-router-dom";
import * as Yup from "yup";
import { ErrorNotAvailable } from "../login/errors/ErrorNotAvailable";
import { RespondInvitationUI } from "./interface";
import { ErrorInvitationExpired } from "./cases/ErrorInvitationExpired";

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

interface RespondInvitationProps {
  clientData: {
    logo: string;
    logoAlt: string;
  };
  invitationId: string;
}

function RespondInvitation(props: RespondInvitationProps) {
  const { clientData, invitationId } = props;
  const [loading, setLoading] = useState(false);

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

  function getInvitationInformation() {
    return invitationEntriesDataMock.find(
      (invitation) => invitation.id === invitationId
    );
  }

  /* const handleSubmit = (values) => {
    const stepKey = Object.keys(stepsRegisterUserConfig).find(
      (key) => stepsRegisterUserConfig[key].id === currentStep
    );

    setInvitationData((prevInvitationData) => ({
      ...prevInvitationData,
      [stepKey]: { entries: values },
    }));
  }; */

  if (!invitation) {
    return <ErrorNotAvailable />;
  }

  if (invitation.status === "Pending") {
    return <ErrorInvitationExpired />;
  }

  return <RespondInvitationUI />;
}

export { RespondInvitation };
