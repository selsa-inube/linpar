import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";

import { InviteUI } from "./interface";
import { IInviteFormValues } from "./types";
import { userEntriesDataMock } from "@src/mocks/apps/privileges/users/users.mock";
import { userSearchCardData } from "@src/mocks/apps/privileges/users/usersSearchField.mock";

const LOADING_TIMEOUT = 1500;

const initialValues: IInviteFormValues = {
  name: "",
  userID: "",
  phone: "",
  email: "",
};

const validationSchema = Yup.object({
  // name: validationRules.username.required(validationMessages.required),
  userID: validationRules.identification,
  phone: validationRules.phone.required(validationMessages.required),
  email: validationRules.email.required(validationMessages.required),
});

function Invite() {
  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const navigate = useNavigate();

  const screenMovil = useMediaQuery("(max-width: 744px)");

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,
    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setFormInvalid(false);
        setShowMessage(true);
        formik.resetForm();
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
      usersInfo={userEntriesDataMock}
    />
  );
}

export { Invite };
