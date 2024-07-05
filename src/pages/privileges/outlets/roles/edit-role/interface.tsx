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
import { IAssignmentFormEntry } from "../../users/types/forms.types";

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
  rol_id: string;
  valuesAncillaryAccounts: IAncillaryAccountsForm;
  valuesTransactionTypes: IAssignmentFormEntry[];
  valuesBusinessRules?: any;
  valuesCreditboardTasks: IAssignmentFormEntry[];
  valuesUseCases: IAssignmentFormEntry[];
  handleUpdateDataSwitchstep: (values: any) => void;
}

export const EditRoleUI = (props: IEditRoleUIProps) => {
  const {
    roleCardData,
    data,
    onTabChange,
    selectedTab,
    dataTabs,
    smallScreen,
    loading,
    rol_id,
    valuesAncillaryAccounts,
    valuesTransactionTypes,
    valuesBusinessRules,
    valuesCreditboardTasks,
    valuesUseCases,
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
              rol_id={rol_id}
              withSubmitButtons
              linixRoles={data}
            />
          )}

          {selectedTab === stepsAddRol.auxiliaryAccounts.label && (
            <AncillaryAccountsForm
              initialValues={valuesAncillaryAccounts}
              rol_id={rol_id}
              withSubmitButtons
            />
          )}

          {selectedTab === stepsAddRol.transactionTypes.label && (
            <InitializerForm
              dataOptionsForms={valuesTransactionTypes}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
              id={rol_id}
              keyData={"k_Rol"}
              nameDB={"linix-roles"}
              property={"tiposDeMovimientoContablePorRol"}
              propertyData={"k_Id"}
            />
          )}
          {selectedTab === stepsAddRol.businessRules.label && (
            <InitializerForm
              dataOptionsForms={valuesBusinessRules}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
              id={rol_id}
              keyData={"k_Rol"}
              nameDB={"linix-roles"}
              property={"reglasDeNegocioPorRol"}
              propertyData={"k_Id"}
            />
          )}
          {selectedTab === stepsAddRol.crediboardTasks.label && (
            <InitializerForm
              dataOptionsForms={valuesCreditboardTasks}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
              id={rol_id}
              keyData={"k_Rol"}
              nameDB={"linix-roles"}
              property={"tareasCrediboardPorRol"}
              propertyData={"k_Id"}
            />
          )}
          {selectedTab === stepsAddRol.useCases.label && (
            <InitializerForm
              dataOptionsForms={valuesUseCases}
              handleSubmit={handleUpdateDataSwitchstep}
              withSubmitButtons
              id={rol_id}
              keyData={"k_Rol"}
              nameDB={"linix-positions"}
              property={"casosDeUsoPorRol"}
              propertyData={"k_Id"}
            />
          )}
        </>
      </Stack>
    </Stack>
  );
};
