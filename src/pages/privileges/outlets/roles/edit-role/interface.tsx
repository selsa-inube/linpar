import { FaUserGear } from "react-icons/fa6";
import { Stack, Breadcrumbs, inube, Tabs } from "@inube/design-system";
import { PageTitle } from "@src/components/PageTitle";
import { SubjectCard } from "@src/components/cards/SubjectCard";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { AncillaryAccountsForm } from "../components/AncillaryAccountsForm";
import { InitializerForm } from "../../forms/InitializerForm";
import { editRoleConfig, editRoleCardLabels } from "./config/editRole.config";
import { stepsAddRol } from "../add-role/config/addRol.config";

import { IFormAddRole, IRol } from "../types";
import { StyledContainerLoading } from "../../users/invite/styles";
import { LoadingApp } from "@src/pages/login/outlets/LoadingApp";

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
  // editData: IRol;

  // valuesAncillaryAccounts: IAncillaryAccountsForm;

  // handleUpdateDataSwitchstep: (values: any) => void;
  linixRoles: Record<string, unknown>[];
}

export const EditRoleUI = (props: IEditRoleUIProps) => {
  const {
    // roleCardData,
    dataEditRoleLinixForm,
    linixRoles,
    // data,
    onTabChange,
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

            <SubjectCard
              subjectData={""}
              title="Editar Rol"
              icon={<FaUserGear />}
              labels={editRoleCardLabels}
            />
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
            />
          )}

          {selectedTab === stepsAddRol.auxiliaryAccounts.label && (
            <AncillaryAccountsForm
              initialValues={dataEditRoleLinixForm.ancillaryAccounts.values}
              k_Rol={id}
              withSubmitButtons
            />
          )}

          {selectedTab === stepsAddRol.transactionTypes.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.transactionTypes.values}
              handleSubmit={() => []}
              withSubmitButtons
            />
          )}
          {selectedTab === stepsAddRol.businessRules.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.businessRules.values}
              handleSubmit={() => []}
              withSubmitButtons
            />
          )}
          {selectedTab === stepsAddRol.crediboardTasks.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.crediboardTasks.values}
              handleSubmit={() => []}
              withSubmitButtons
            />
          )}
          {selectedTab === stepsAddRol.useCases.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.useCases.values}
              handleSubmit={() => []}
              withSubmitButtons
            />
          )}
        </>
      </Stack>
    </Stack>
  );
};
