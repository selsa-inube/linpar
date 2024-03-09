import {
  Assisted,
  Breadcrumbs,
  Stack,
  useMediaQuery,
} from "@inube/design-system";
import itemNotFound from "@src/assets/images/ItemNotFound.png";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import { PageTitle } from "@components/PageTitle";
import {
  createRolConfig,
  finishAssistedRolModalConfig,
  stepsAddRol,
} from "./addRol.config";

interface AddRolUIProps {
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  currentStep: number;
  handleCompleteInvitation: () => void;
  handleToggleModal: () => void;
  showModal: boolean;
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
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

  return (
    <Stack direction="column" padding={smallScreen ? "s200" : "s400 s800"}>
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={createRolConfig[0].crumbs} />
          <Stack justifyContent="space-between" alignItems="center" gap="50px">
            <PageTitle
              title={createRolConfig[0].title}
              description={createRolConfig[0].description}
              navigatePage="/privileges/linixUseCase"
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

          {currentStep === stepsAddRol.generalInformation.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Información general"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.clientServerButton.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Opciones botón cliente servidor"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.downloadableDocuments.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Documentos descargables"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.webReports.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Reportes web"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.webOptions.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Opciones web"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.clientServerReports.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Reportes cliente servidor"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.clientServerOptions.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Opciones cliente servidor"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddRol.summary.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Página de resumen"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
        </>
      </Stack>
      {showModal && finishModal(handleToggleModal, handleCompleteInvitation)}
    </Stack>
  );
}
