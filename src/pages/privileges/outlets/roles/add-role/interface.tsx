import {
  Assisted,
  Breadcrumbs,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import itemNotFound from "@assets/images/ItemNotFound.png";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { FormButtons } from "@components/forms/submit/FormButtons";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { PageTitle } from "@components/PageTitle";

import {
  createRolConfig,
  finishAssistedRolModalConfig,
  stepsAddRol,
} from "./config/addRol.config";
import {
  GeneralInformationForm,
  IGeneralInformationForm,
} from "./forms/GeneralInformationForm";
import { InitializerForm } from "../../forms/InitializerForm";
import { IFormAddRole } from "../types";

interface AddRolUIProps {
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  currentStep: number;
  handleCompleteInvitation: () => void;
  handleToggleModal: () => void;
  showModal: boolean;
  dataForm: IFormAddRole;
  handleUpdateGeneralInformation: (value: IGeneralInformationForm) => void;
  handleUpdateTransactionTypes: (values: any) => void;
}

function finishModal(
  handleCloseModal: () => void,
  handleCompleteInvitation: () => void
) {
  const { title, description, actionText, appearance } =
    finishAssistedRolModalConfig;

  return (
    <DecisionModal
      title={title}
      description={description}
      actionText={actionText}
      loading={false}
      appearance={appearance}
      closeModal={handleCloseModal}
      handleClick={handleCompleteInvitation}
    />
  );
}

export function AddRolUI(props: AddRolUIProps) {
  const {
    currentStep,
    handleCompleteInvitation,
    handleToggleModal,
    showModal,
    handlePrevStep,
    handleNextStep,
    dataForm,
    handleUpdateGeneralInformation,
    handleUpdateTransactionTypes,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const isCurrentStateValid = () => {
    if (currentStep === Object.values(stepsAddRol).length) {
      handleToggleModal();
    } else {
      handleNextStep(currentStep);
    }
  };
  const isPreviousStepAvailable = () => {
    return currentStep !== 1 ? (handlePrevStep(currentStep), true) : false;
  };

  const {
    generalInformation: { values },
    transactionTypes: { values: transactionTypes },
    useCases: { values: useCases },
  } = dataForm;

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
            steps={Object.values(stepsAddRol)}
            currentStepId={currentStep}
            handlePrev={handlePrevStep}
            handleNext={
              currentStep === Object.values(stepsAddRol).length
                ? handleToggleModal
                : handleNextStep
            }
          />

          <FormButtons
            handleSubmit={isCurrentStateValid}
            handleReset={isPreviousStepAvailable}
            cancelButtonText="Atrás"
            submitButtonText="Siguiente"
            disableReset={currentStep === 1}
          >
            {currentStep === stepsAddRol.generalInformation.id && (
              <GeneralInformationForm
                handleSubmit={handleUpdateGeneralInformation}
                valuesData={values}
              />
            )}

            {currentStep === stepsAddRol.auxiliaryAccounts.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Opciones de cuentas auxiliares"}
                description={"Esta sección está en construcción."}
                buttonDescription={"Retorna a la página de inicio"}
                route={"/privileges/roles"}
              />
            )}
            {currentStep === stepsAddRol.transactionTypes.id && (
              <InitializerForm
                dataOptionsForms={transactionTypes}
                handleSubmit={handleUpdateTransactionTypes}
              />
            )}
            {currentStep === stepsAddRol.businessRules.id && (
              <ItemNotFound
                image={itemNotFound}
                title={"Tareas Crediboard"}
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
              <InitializerForm
                dataOptionsForms={useCases}
                handleSubmit={handleUpdateTransactionTypes}
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
          </FormButtons>
        </>
      </Stack>

      {showModal && finishModal(handleToggleModal, handleCompleteInvitation)}
    </Stack>
  );
}
