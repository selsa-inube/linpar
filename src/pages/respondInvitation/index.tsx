import { useFormik } from "formik";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import * as Yup from "yup";
import { invitationEntriesDataMock } from "@mocks/apps/privileges/invitations/invitations.mock";
import { businessUnitDataMock } from "@mocks/login/businessUnit.mock";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";

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
  const { bussinessUnits_id, invitation_id } = useParams();
  const [loading, setLoading] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const navigate = useNavigate();

  const getInvitationInformation = () => {
    return invitationEntriesDataMock.find(
      (invitation) => invitation.customerId === invitation_id
    );
  };

  const getClientData = () => {
    if (!bussinessUnits_id) return;
    return businessUnitDataMock.find(
      (bussinessUnitsMock) => bussinessUnitsMock.id === bussinessUnits_id
    );
  };

  const bussinessUnitsData = getClientData();
  const invitation = getInvitationInformation();

  const formik = useFormik({
    initialValues: {
      name: invitation?.userName,
      userID: invitation?.userIdentification,
      email: invitation?.email,
      phone: invitation?.phoneNumber,
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
          `/respond-invitation/${bussinessUnits_id}/${invitation_id}/confirmation-register-complete`
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

  if (!invitation || !bussinessUnitsData) {
    return <ErrorNotAvailable bussinessUnitsData={bussinessUnitsData} />;
  }

  if (invitation.status === "Sent") {
    return <ErrorInvitationExpired bussinessUnitsData={bussinessUnitsData} />;
  }

  return (
    <RespondInvitationUI
      bussinessUnitsData={bussinessUnitsData}
      loading={loading}
      formik={formik}
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmitForm}
    />
  );
}

export { RespondInvitation };
