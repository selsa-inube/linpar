import { FaUserGear } from "react-icons/fa6";
import {
  Stack,
  SkeletonLine,
  Breadcrumbs,
  inube,
  Tabs,
} from "@inube/design-system";
import { PageTitle } from "@src/components/PageTitle";
import { SubjectCard } from "@src/components/cards/SubjectCard";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import {
  AncillaryAccountsForm,
  IAncillaryAccountsForm,
} from "../components/AncillaryAccountsForm";
import { InitializerForm } from "../../forms/InitializerForm";
import { editRoleConfig, editRoleCardLabels } from "./config/editRole.config";
import { stepsAddRol } from "../add-role/config/addRol.config";

import { IFormAddRole, IRol } from "../types";

interface ITabs {
  id: string;
  label: string;
  isDisabled: boolean;
}

interface IEditRoleUIProps {
  roleCardData: { username: string; code: number };
  data: any;
  dataTabs: ITabs[];
  onTabChange: (tabId: string) => void;
  selectedTab: string;
  smallScreen: boolean;
  loading: boolean;
  k_Rol: string;
  editData: IRol;
  dataEditRoleLinixForm: IFormAddRole;
  valuesAncillaryAccounts: IAncillaryAccountsForm;

  handleUpdateDataSwitchstep: (values: any) => void;
  linixRoles: Record<string, unknown>[];
}

export const EditRoleUI = (props: IEditRoleUIProps) => {
  const {
    roleCardData,
    dataEditRoleLinixForm,
    linixRoles,
    data,
    onTabChange,
    selectedTab,
    dataTabs,
    smallScreen,
    loading,
    k_Rol,
    valuesAncillaryAccounts,

    handleUpdateDataSwitchstep,
  } = props;

  return loading ? (
    <SkeletonLine animated />
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
              initialValues={data}
              k_Rol={k_Rol}
              withSubmitButtons
              linixRoles={linixRoles}
            />
          )}

          {selectedTab === stepsAddRol.auxiliaryAccounts.label && (
            <AncillaryAccountsForm
              initialValues={valuesAncillaryAccounts}
              k_Rol={k_Rol}
              withSubmitButtons
            />
          )}

          {selectedTab === stepsAddRol.transactionTypes.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.transactionTypes.values}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
            />
          )}
          {selectedTab === stepsAddRol.businessRules.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.businessRules.values}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
            />
          )}
          {selectedTab === stepsAddRol.crediboardTasks.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.crediboardTasks.values}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
            />
          )}
          {selectedTab === stepsAddRol.useCases.label && (
            <InitializerForm
              dataOptionsForms={dataEditRoleLinixForm.useCases.values}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
            />
          )}
        </>
      </Stack>
    </Stack>
  );
};
