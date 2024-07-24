import { FaUserGear } from "react-icons/fa6";
import { Stack, Breadcrumbs, inube, Tabs } from "@inube/design-system";
import { PageTitle } from "@src/components/PageTitle";
import { SubjectCard } from "@src/components/cards/SubjectCard";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { AncillaryAccountsForm } from "../components/AncillaryAccountsForm";

import { editRoleConfig, editRoleCardLabels } from "./config/editRole.config";
import { stepsAddRol } from "../add-role/config/addRol.config";

import { IFormAddRole, IHandleChangeFormData, IRol } from "../types";
import { StyledContainerLoading } from "../../users/invite/styles";
import { LoadingApp } from "@src/pages/login/outlets/LoadingApp";
import { Button } from "@inubekit/button";
import { RenderMessage } from "@src/components/feedback/RenderMessage";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../users/types/forms.types";
import { InitializerForm } from "../components/InitializerForm";

interface ITabs {
  id: string;
  label: string;
  isDisabled: boolean;
}

interface IEditRoleUIProps {
  // roleCardData: { username: string; code: number };
  // data: any;
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
  const {
    handleDataChange,
    roleCardData,
    setCsOptionsChange,
    csOptionsChange,
    dataEditRoleLinixForm,
    handleUpdateFormData,
    message,
    onCloseSectionMessage,
    linixRoles,
    // data,
    onTabChange,
    onSubmit,
    selectedTab,
    dataTabs,
    smallScreen,
    loading,
    id,
    // valuesAncillaryAccounts,
  } = props;

  return loading ? (
    <StyledContainerLoading>
      <LoadingApp />
    </StyledContainerLoading>
  ) : (
    <Stack direction="column" padding={smallScreen ? "s200" : "s400 s800"}>
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
              navigatePage="/privileges/roles"
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
            tabs={dataTabs}
          />
          {selectedTab === stepsAddRol.generalInformation.label && (
            <GeneralInformationForm
              initialValues={dataEditRoleLinixForm.generalInformation.values}
              k_Rol={id}
              linixRoles={linixRoles}
              handleSubmit={handleUpdateFormData}
            />
          )}

          {selectedTab === stepsAddRol.ancillaryAccounts.label && (
            <AncillaryAccountsForm
              initialValues={dataEditRoleLinixForm.ancillaryAccounts.values}
              k_Rol={id}
              handleSubmit={handleUpdateFormData}
            />
          )}

          {selectedTab === stepsAddRol.transactionTypes.label && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditRoleLinixForm.transactionTypes.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab === stepsAddRol.businessRules.label && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditRoleLinixForm.businessRules.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          {selectedTab === stepsAddRol.crediboardTasks.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.crediboardTasks.values}
              handleSubmit={() => []}
            />
          )}
          {selectedTab === stepsAddRol.useCases.label && (
            <InitializerForm
              onHasChanges={handleDataChange}
              dataOptionsForms={dataEditRoleLinixForm.useCases.values}
              handleSubmit={handleUpdateFormData}
              changeData={csOptionsChange}
              setChangedData={setCsOptionsChange}
            />
          )}
          <Stack gap={inube.spacing.s200} justifyContent="flex-end">
            <Button appearance="gray" onClick={() => {}} type="reset">
              Cancelar
            </Button>
            <Button
              appearance="primary"
              onClick={onSubmit}
              loading={loading}
              type="button"
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
