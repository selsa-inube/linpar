import {
  Button,
  Stack,
  SkeletonLine,
  Breadcrumbs,
  inube,
  Tabs,
} from "@inube/design-system";
import { PageTitle } from "@src/components/PageTitle";
import { GeneralInformationForm } from "../add-role/forms/GeneralInformationForm";
import {
  AncillaryAccountsForm,
  IAncillaryAccountsForm,
} from "../add-role/forms/AncillaryAccounts";
import { InitializerForm } from "../../forms/InitializerForm";
import { editRolConfig, stepsAddRol } from "../add-role/config/addRol.config";
import { IAssignmentFormEntry } from "../../users/types/forms.types";

interface ITabs {
  id: string;
  label: string;
  isDisabled: boolean;
}

interface IEditRoleUIProps {
  data: any;
  dataTabs: ITabs[];
  onTabChange: (tabId: string) => void;
  selectedTab: string;
  smallScreen: boolean;
  loading: boolean;
  valuesAncillaryAccounts: IAncillaryAccountsForm;
  valuesTransactionTypes: IAssignmentFormEntry[];
  valuesBusinessRules?: any;
  valuesCreditboardTasks: IAssignmentFormEntry[];
  valuesUseCases: IAssignmentFormEntry[];
  handleUpdateDataSwitchstep: (values: any) => void;
}

export const EditRoleUI = (props: IEditRoleUIProps) => {
  const {
    data,
    onTabChange,
    selectedTab,
    dataTabs,
    smallScreen,
    loading,
    valuesAncillaryAccounts,
    valuesTransactionTypes,
    valuesCreditboardTasks,
    valuesUseCases,
    handleUpdateDataSwitchstep,
  } = props;

  //console.log(valuesAncillaryAccounts, "vslurd");
  console.log("- - - - - - - - - - - - - - - - ");
  // console.log("editRolConfig", editRolConfig);
  // console.log("dataTabs", dataTabs);
  console.log("valuesTransactionTypes", valuesTransactionTypes);
  console.log("loading", loading);

  return loading ? (
    <SkeletonLine animated />
  ) : (
    <Stack direction="column" padding={smallScreen ? "s200" : "s400 s800"}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s400} direction="column">
          <Breadcrumbs crumbs={editRolConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s650}
          >
            <PageTitle
              title={editRolConfig[0].title}
              description={editRolConfig[0].description}
              navigatePage="/privileges/roles"
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
            <GeneralInformationForm initialValues={data} />
          )}

          {selectedTab === stepsAddRol.auxiliaryAccounts.label && (
            <AncillaryAccountsForm initialValues={valuesAncillaryAccounts} />
          )}

          {selectedTab === stepsAddRol.transactionTypes.label && (
            <InitializerForm
              dataOptionsForms={valuesTransactionTypes}
              handleSubmit={handleUpdateDataSwitchstep}
            />
          )}
          {/* {selectedTab === stepsAddRol.businessRules.label && (
            <InitializerForm
              dataOptionsForms={valuesBusinessRules}
              handleSubmit={handleUpdateDataSwitchstep}
            />
          )} */}
          {selectedTab === stepsAddRol.crediboardTasks.label && (
            <InitializerForm
              dataOptionsForms={valuesCreditboardTasks}
              handleSubmit={handleUpdateDataSwitchstep}
            />
          )}
          {selectedTab === stepsAddRol.useCases.label && (
            <InitializerForm
              dataOptionsForms={valuesUseCases}
              handleSubmit={handleUpdateDataSwitchstep}
            />
          )}
        </>
        <Stack gap="16px" justifyContent="flex-end">
          <Button
            type="button"
            spacing="compact"
            variant="none"
            appearance="gray"
          >
            Cancelar
          </Button>

          <Button spacing="compact">Guardar</Button>
        </Stack>
      </Stack>
    </Stack>
  );
};
