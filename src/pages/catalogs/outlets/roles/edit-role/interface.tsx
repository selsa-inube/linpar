import { useState } from "react";
import { FaUserGear } from "react-icons/fa6";
import { Stack, inube } from "@inube/design-system";
import { Tabs } from "@inubekit/tabs";
import { Button } from "@inubekit/button";
import { useMediaQueries } from "@inubekit/hooks";
import { PageTitle } from "@components/PageTitle";
import { SubjectCard } from "@components/cards/SubjectCard";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import { StyledContainerLoading } from "@pages/privileges/outlets/users/tabs/invitations/Complete-invitation/styles";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { AncillaryAccountsForm } from "../components/AncillaryAccountsForm";
import { editRoleConfig, editRoleCardLabels } from "./config/editRole.config";
import { stepsAddRol } from "../add-role/config/addRol.config";
import { IFormAddRole, IHandleChangeFormData, IRol } from "../types";
import { InitializerForm } from "../components/InitializerForm";

interface ITabs {
  id: string;
  label: string;
  isDisabled: boolean;
}

interface IEditRoleUIProps {
  rolesEdit: IRol;
  dataTabs: ITabs[];
  onTabChange: (tabId: string) => void;
  selectedTab: string;
  smallScreen: boolean;
  loading: boolean;
  id: number;
  dataEditRoleLinixForm: IFormAddRole;
  onSubmit: () => void;
  onCloseSectionMessage: () => void;
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  handleDataChange: (hasChanges: boolean) => void;
  setCsOptionsChange: (csOptionsChange: IAssignmentFormEntry[]) => void;
  csOptionsChange: IAssignmentFormEntry[];
  roleCardData: { username: string; code: number | undefined };
  message: IMessageState;
  linixRoles: Record<string, unknown>[];
  currentFormHasChanges: boolean;
  handleReset: () => void;
}

export const EditRoleUI = (props: IEditRoleUIProps) => {
  const [key, setKey] = useState(0);

  const {
    handleReset,
    handleDataChange,
    roleCardData,
    setCsOptionsChange,
    csOptionsChange,
    dataEditRoleLinixForm,
    handleUpdateFormData,
    message,
    onCloseSectionMessage,
    linixRoles,
    onTabChange,
    onSubmit,
    selectedTab,
    dataTabs,
    loading,
    currentFormHasChanges,
  } = props;

  const forceReRender = () => {
    setKey((prevKey) => prevKey + 1);
  };
  const { "(max-width: 580px)": smallScreen, "(max-width: 1073px)": typeTabs } =
    useMediaQueries(["(max-width: 580px)", "(max-width: 1073px)"]);

  return loading ? (
    <StyledContainerLoading>
      <LoadingApp />
    </StyledContainerLoading>
  ) : (
    <Stack
      key={key}
      direction="column"
      padding={smallScreen ? "s200" : "s400 s800"}
    >
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s400} direction="column">
          <Breadcrumbs crumbs={editRoleConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s650}
          >
            <PageTitle
              title={editRoleConfig[0].title}
              description={editRoleConfig[0].description}
              navigatePage="/catalogs/roles"
            />
            {roleCardData && (
              <SubjectCard
                subjectData={roleCardData}
                title="Editar Rol"
                icon={<FaUserGear />}
                labels={editRoleCardLabels}
              />
            )}
          </Stack>
        </Stack>
        <>
          <Tabs
            onChange={onTabChange}
            selectedTab={selectedTab}
            scroll={typeTabs ? true : false}
            tabs={dataTabs}
          />
          {selectedTab === stepsAddRol.generalInformation.label && (
            <GeneralInformationForm
              initialValues={dataEditRoleLinixForm.generalInformation.values}
              linixRoles={linixRoles}
              onFormValueChange={handleUpdateFormData}
              onHasChanges={handleDataChange}
            />
          )}

          {selectedTab === stepsAddRol.ancillaryAccounts.label && (
            <AncillaryAccountsForm
              initialValues={dataEditRoleLinixForm.ancillaryAccounts.values}
              onFormValueChange={handleUpdateFormData}
              onHasChanges={handleDataChange}
            />
          )}

          {selectedTab === stepsAddRol.transactionTypes.label && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditRoleLinixForm.transactionTypes.values}
              onFormValueChange={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab === stepsAddRol.businessRules.label && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditRoleLinixForm.businessRules.values}
              onFormValueChange={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}

          {selectedTab === stepsAddRol.useCases.label && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditRoleLinixForm.useCases.values}
              onFormValueChange={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          <Stack gap={inube.spacing.s200} justifyContent="flex-end">
            <Button
              appearance="gray"
              disabled={!currentFormHasChanges}
              onClick={() => {
                handleReset();
                forceReRender();
              }}
              type="reset"
            >
              Cancelar
            </Button>
            <Button
              appearance="primary"
              onClick={onSubmit}
              loading={loading}
              type="button"
              disabled={!currentFormHasChanges}
            >
              Guardar
            </Button>
          </Stack>
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={onCloseSectionMessage}
            />
          )}
        </>
      </Stack>
    </Stack>
  );
};
