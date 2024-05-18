import { useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "@inube/design-system";

import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";

import { InviteUI } from "./interface";
import { IInvitationUser, IInviteFormValues } from "./types";
import { userSearchCardData } from "@src/mocks/apps/privileges/users/usersSearchField.mock";
import { saveLinixInvitations } from "./utils";
import { getAll } from "@src/mocks/utils/dataMock.service";

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
  const [loadingPage, setLoadingPage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const [formInvalid, setFormInvalid] = useState(false);
  const [dataInvitationUsers, setDataInvitationUsers] = useState<
    IInvitationUser[]
  >([]);

  const resetSearchUserRef = useRef(() => {});
  const navigate = useNavigate();

  const screenMovil = useMediaQuery("(max-width: 744px)");

  useEffect(() => {
    setLoadingPage(true);
    getAll("linix-invitation-users")
      .then((data) => {
        if (data !== null) {
          setDataInvitationUsers(data as IInvitationUser[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching invitation users:", error.message);
      })
      .finally(() => {
        setLoadingPage(false);
      });
  }, []);
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
      loadingPage={loadingPage}
      formInvalid={formInvalid}
      showMessage={showMessage}
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleSubmit={handleSubmit}
      screenMovil={screenMovil}
      searchFieldData={userSearchCardData}
      usersInfo={dataInvitationUsers}
      onReset={handleResetSearchUser}
    />
  );
}

export { Invite };
