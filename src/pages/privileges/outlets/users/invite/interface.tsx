import { MdOutlineShortcut } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Breadcrumbs,
  Button,
  Grid,
  SectionMessage,
  Stack,
  Textfield,
  useMediaQueries,
} from "@inube/design-system";
import { useState } from "react";
import { EMessageType } from "@src/types/messages.types";
import { PageTitle } from "@components/PageTitle";
import { SearchUserCard } from "@components/cards/SearchUserCard";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { messageInvitationSentConfig } from "./config/messageInvitationSent.config";
import { usersInvitationsConfig } from "./config/usersInvitations.config";
import { StyledContainerLoading, StyledMessageContainer } from "./styles";

interface InviteUIProps {
  formik: FormikValues;
  formInvalid: boolean;
  handleCloseSectionMessage: () => void;
  handleSubmit: () => void;
  loading: boolean;
  loadingPage: boolean;
  onReset: (resetFunction: () => void) => void;
  screenMovil: boolean;
  searchFieldData: Record<string, string | number>;
  showMessage: boolean;
  usersInfo: Record<string, string | number | any>[];
}

function renderMessages(
  showMessage: boolean,
  formInvalid: boolean,
  handleCloseSectionMessage: () => void
) {
  if (!showMessage) {
    return null;
  }

  let messageType: EMessageType = EMessageType.SUCCESS;

  if (formInvalid) {
    messageType = EMessageType.FAILED;
  }

  const { title, description, icon, appearance } =
    messageInvitationSentConfig[messageType];

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          title={title}
          description={description}
          icon={icon}
          appearance={appearance}
          duration={4000}
          closeSectionMessage={handleCloseSectionMessage}
        />
      </Stack>
    </StyledMessageContainer>
  );
}

function stateValue(formik: FormikValues, attribute: string) {
  if (!formik.touched[attribute]) return undefined;
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
}

function InviteUI(props: InviteUIProps) {
  const {
    formik,
    formInvalid,
    loading,
    loadingPage,
    handleCloseSectionMessage,
    handleSubmit,
    onReset,
    searchFieldData,
    usersInfo,
    showMessage,
  } = props;

  const mediaQueries = ["(max-width: 1111px)", "(max-width: 565px)"];
  const matches = useMediaQueries(mediaQueries);
  const [isUserSelected, setIsUserSelected] = useState(false);

  const checkIfAnyFieldIsEmpty = () => {
    return !formik.values.userIdentification || !formik.values.phoneNumber;
  };

  const handleUserSelect = (userData: Record<string, string | number>) => {
    formik.setFieldValue("userName", userData.userName);
    formik.setFieldValue("userIdentification", userData.userIdentification);
    formik.setFieldValue("phoneNumber", userData.phoneNumber);
    setIsUserSelected(true);
  };

  return loadingPage ? (
    <StyledContainerLoading>
      <LoadingApp />
    </StyledContainerLoading>
  ) : (
    <Stack direction="column" padding="s400 s800">
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={usersInvitationsConfig[0].crumbs} />
          <PageTitle
            title={usersInvitationsConfig[0].label}
            description={usersInvitationsConfig[0].description}
            navigatePage="/privileges/users"
          />
        </Stack>
        <form>
          <Stack gap="32px" alignItems="flex-end" direction="column">
            <Grid
              templateColumns={
                matches["(max-width: 1111px)"] ? "1fr" : "repeat(2, 1fr)"
              }
              gap={"s300"}
              margin={"s0 s0 s400 s0"}
              width={"100%"}
              autoRows="unset"
            >
              <SearchUserCard
                label="Nombre"
                name="searchUser"
                id="searchUser"
                placeholder="Buscar usuario"
                userData={usersInfo}
                searchFieldData={searchFieldData}
                title={"Búsqueda"}
                infoTitle={"Busca el usuario para enviar la invitación."}
                idModal="searchField"
                nameModal="searchField"
                idLabel="userIdentification"
                nameLabel="userName"
                labelModal={"Digita el nombre o numero de identificación."}
                placeholderModal={
                  "Digita el nombre o numero de identificación."
                }
                onUserSelect={handleUserSelect}
                onReset={onReset}
              />
              <Textfield
                label="Identificación"
                placeholder="Ingrese su número de identificación"
                name="userIdentification"
                id="userIdentification"
                value={formik.values.userIdentification}
                type="number"
                disabled={loading}
                size="compact"
                fullwidth={true}
                readOnly
              />

              <Textfield
                label="Número de teléfono"
                placeholder="Ingrese su número telefónico"
                name="phoneNumber"
                id="phoneNumber"
                value={formik.values.phoneNumber}
                type="tel"
                disabled={loading}
                size="compact"
                fullwidth={true}
                readOnly
              />

              <Textfield
                label="Correo"
                placeholder="Ingrese su dirección de correo electrónico"
                name="email"
                id="email"
                value={formik.values.email}
                type="email"
                message={
                  stateValue(formik, "email") === "valid"
                    ? "El correo electrónico es valido"
                    : formik.errors.email
                }
                disabled={loading}
                size="compact"
                fullwidth={true}
                status={stateValue(formik, "email")}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                readOnly={isUserSelected && checkIfAnyFieldIsEmpty()}
              />
            </Grid>
            <Button
              type="button"
              appearance="primary"
              iconBefore={<MdOutlineShortcut size={18} />}
              loading={loading}
              onClick={handleSubmit}
            >
              Enviar
            </Button>
          </Stack>
        </form>
      </Stack>
      {renderMessages(showMessage, formInvalid, handleCloseSectionMessage)}
    </Stack>
  );
}

export { InviteUI };
