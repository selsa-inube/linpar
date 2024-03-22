import {
  Assisted,
  Breadcrumbs,
  Button,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import itemNotFound from "@assets/images/ItemNotFound.png";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { PageTitle } from "@components/PageTitle";

import { IFormAddRole, IFormAddRoleRef, IStep } from "../types";
import { createRolConfig, stepsAddRol } from "./config/addRol.config";
import {
  GeneralInformationForm,
  IGeneralInformationForm,
} from "./forms/GeneralInformationForm";
import { AncillaryAccountsForm } from "./forms/AncillaryAccounts";

interface AddRolUIProps {
  addRoleFormValid: IFormAddRole;
  currentStep: number;
  formReferences: IFormAddRoleRef;
  steps: IStep[];
  isAddRoleFormValid: boolean;
  setAddRoleFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleFinishAssisted?: () => void;
  handleUpdateGeneralInformation: (value: IGeneralInformationForm) => void;
}

export function AddRolUI(props: AddRolUIProps) {
  const {
    addRoleFormValid,
    currentStep,
    formReferences,
    steps,
    isAddRoleFormValid,
    handleNextStep,
    handlePreviousStep,
    handleUpdateGeneralInformation,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  const {
    generalInformation: { values },
    ancillaryAccounts: { values: ancillaryAccountsValues },
  } = addRoleFormValid;

  return (
    <Stack direction="column" padding={smallScreen ? "s200" : "s400 s800"}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s400} direction="column">
          <Breadcrumbs crumbs={createRolConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s650}
          >
            <PageTitle
              title={createRolConfig[0].title}
              description={createRolConfig[0].description}
              navigatePage="/privileges/roles"
            />
          </Stack>
        </Stack>
        <>
          <Assisted
            steps={steps}
            currentStepId={currentStep}
            handlePrev={handlePreviousStep}
            handleNext={handleNextStep}
          />

          {currentStep === stepsAddRol.generalInformation.id && (
            <GeneralInformationForm
              handleSubmit={handleUpdateGeneralInformation}
              valuesData={values}
            />
          )}

          {currentStep === stepsAddRol.auxiliaryAccounts.id && (
            <AncillaryAccountsForm
              initialValues={ancillaryAccountsValues}
              ref={formReferences.ancillaryAccounts}
            />
          )}
          {currentStep === stepsAddRol.transactionTypes.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Tipos de movimiento"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/roles"}
            />
          )}
          {currentStep === stepsAddRol.businessRules.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Reglas de negocio"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/roles"}
            />
          )}
          {currentStep === stepsAddRol.crediboardTasks.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Tareas Crediboard"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/roles"}
            />
          )}
          {currentStep === stepsAddRol.useCases.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Casos de uso"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/roles"}
            />
          )}

          {currentStep === stepsAddRol.summary.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Página de resumen"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/roles"}
            />
          )}
        </>
        <Stack gap="16px" justifyContent="flex-end">
          <Button
            onClick={handlePreviousStep}
            type="button"
            disabled={currentStep === steps[0].id}
            spacing="compact"
            variant="none"
            appearance="gray"
          >
            Atrás
          </Button>

          <Button
            onClick={handleNextStep}
            spacing="compact"
            disabled={!isAddRoleFormValid}
          >
            {currentStep === steps.length ? "Enviar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
