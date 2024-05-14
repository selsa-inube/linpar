import { useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";

import { InviteUI } from "./interface";
import { IInviteFormValues } from "./types";
import { userSearchCardData } from "@src/mocks/apps/privileges/users/usersSearchField.mock";
import { saveLinixInvitations } from "./utils";
import { invitationUserEntriesDataMock } from "@src/mocks/apps/privileges/invitations/invitationUsers.mock";

const LOADING_TIMEOUT = 1500;

const initialValues: IInviteFormValues = {
  userName: "",
  userIdentification: "",
  phoneNumber: "",
  email: "",
};

const validationSchema = Yup.object({
  userIdentification: validationRules.identification,
  phoneNumber: validationRules.phone.required(validationMessages.required),
  email: validationRules.email.required(validationMessages.required),
});

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const resetSearchUserRef = useRef(() => {});
  const navigate = useNavigate();

  const screenMovil = useMediaQuery("(max-width: 744px)");
  const handleResetSearchUser = (resetFunction: () => void) => {
    resetSearchUserRef.current = resetFunction;
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormInvalid(false);
        saveLinixInvitations(formik.values);
        setShowMessage(true);
        formik.resetForm();
        resetSearchUserRef.current();
        setTimeout(() => {
          navigate(`/privileges/users`, {
            state: { tab: "privileges-invitations" },
          });
        }, 5000);
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage(true);
        setFormInvalid(true);
      }
      formik.handleSubmit();
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
      screenMovil={screenMovil}
      searchFieldData={userSearchCardData}
      usersInfo={invitationUserEntriesDataMock}
      onReset={handleResetSearchUser}
    />
  );
}

export { Invite };
