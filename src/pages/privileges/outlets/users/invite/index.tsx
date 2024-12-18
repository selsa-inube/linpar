import { useContext, useEffect, useRef, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";

import { useMediaQuery } from "@inubekit/hooks";
import { getSearchAllTercero } from "@services/invitations/thirdPartiesNamesUsernames";
import { validationRules } from "@validations/validationRules";
import { validationMessages } from "@validations/validationMessages";
import { userSearchCardData } from "@mocks/apps/privileges/users/usersSearchField.mock";
import { LinparContext } from "@context/AppContext";
import { EAppearance } from "@src/types/colors.types";
import { useFlag } from "@inubekit/flag";
import { InviteUI } from "./interface";
import { IInviteFormValues } from "./types";
import { saveLinixInvitations } from "./utils";
import { messageInvitationSentConfig } from "./config/messageInvitationSent.config";

const initialValues: IInviteFormValues = {
  userName: "",
  userIdentification: "",
  phoneNumber: "",
  email: "",
};

const validationSchema = Yup.object({
  userIdentification: validationRules.identification,
  phoneNumber: validationRules.phone
    .required(validationMessages.required)
    .test("len", "El número de teléfono debe tener 10 dígitos", (val) =>
      Boolean(val && val.toString().length === 10)
    ),
  email: validationRules.email.required(validationMessages.required),
});

function Invite() {
  const [loading, setLoading] = useState(false);
  const [loadingPage] = useState(false);
  const [showMessage, setShowMessage] = useState(false);

  const [dataInvitationUsers, setDataInvitationUsers] = useState<
    Record<string, unknown>[]
  >([]);

  const { linparData } = useContext(LinparContext);

  const resetSearchUserRef = useRef(() => {});
  const navigate = useNavigate();

  const screenMovil = useMediaQuery("(max-width: 744px)");

  const name = linparData.user.userName?.split(" ");
  const { addFlag } = useFlag();
  useEffect(() => {
    rolesTerceros();
  }, []);
  const rolesTerceros = () => {
    if (!LinparContext) return;
    if (dataInvitationUsers.length === 0) {
      setLoading(true);
      getSearchAllTercero(linparData.businessUnit.businessUnitPublicCode)
        .then((newUsers) => {
          setDataInvitationUsers(newUsers);
        })
        .catch((error) => {
          console.info(error);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  };

  const handleResetSearchUser = (resetFunction: () => void) => {
    resetSearchUserRef.current = resetFunction;
  };
  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnBlur: true,
    validateOnChange: false,
    onSubmit: () => {
      setLoading(true);
      saveLinixInvitations(
        formik.values,
        name[0] as string,
        linparData.businessUnit.businessUnitPublicCode
      )
        .then(() => {
          addFlag({
            title: messageInvitationSentConfig.success.title,
            description: messageInvitationSentConfig.success.description,
            appearance: EAppearance.SUCCESS,
            duration: 5000,
          });
          formik.resetForm();
          resetSearchUserRef.current();
          setTimeout(() => {
            navigate(`/privileges/users`, {
              state: { tab: "privileges-invitations" },
            });
          }, 5000);
        })
        .catch((error) => {
          addFlag({
            title: "Error al enviar la invitación",
            description: "No se pudo completar la invitación.",
            appearance: EAppearance.DANGER,
            duration: 5000,
          });
        })
        .finally(() => {
          setLoading(false);
        });
      setTimeout(() => {
        navigate(`/privileges/users`, {
          state: { tab: "privileges-invitations" },
        });
      }, 5000);
    },
  });

  const handleSubmit = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        addFlag({
          title: messageInvitationSentConfig.failed.title,
          description: messageInvitationSentConfig.failed.description,
          appearance: EAppearance.DANGER,
          duration: 5000,
        });
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
