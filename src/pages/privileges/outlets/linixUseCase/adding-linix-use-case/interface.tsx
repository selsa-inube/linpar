import {
  Assisted,
  Breadcrumbs,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { PageTitle } from "@components/PageTitle";
import { ItemNotFound } from "@components/layout/ItemNotFound";
import itemNotFound from "@src/assets/images/ItemNotFound.png";

import {
  CrateLinixUseCaseConfig,
  finishAssistedModalConfig,
  stepsAddingLinixUseCase,
} from "./config/addingLinixUseCase.config";
import { StyledAssistedContainer } from "./styles";
import { GeneralInformationForm } from "./forms/GeneralInformationForm";

function finishModal(
  handleCloseModal: () => void,
  handleCompleteInvitation: () => void
) {
  const { title, description, actionText, appearance } =
    finishAssistedModalConfig;

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

interface AddingLinixUseCaseUIProps {
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  currentStep: number;
  handleCompleteInvitation: () => void;
  handleToggleModal: () => void;
  showModal: boolean;
}

function AddingLinixUseCaseUI(props: AddingLinixUseCaseUIProps) {
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
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s400} direction="column">
          <Breadcrumbs crumbs={CrateLinixUseCaseConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s650}
          >
            <PageTitle
              title={CrateLinixUseCaseConfig[0].title}
              description={CrateLinixUseCaseConfig[0].description}
              navigatePage="/privileges/linixUseCase"
            />
          </Stack>
        </Stack>
        <>
          <StyledAssistedContainer>
            <Assisted
              steps={Object.values(stepsAddingLinixUseCase)}
              currentStepId={currentStep}
              handlePrev={handlePrevStep}
              handleNext={
                currentStep === Object.values(stepsAddingLinixUseCase).length
                  ? handleToggleModal
                  : handleNextStep
              }
            />
          </StyledAssistedContainer>

          {currentStep === stepsAddingLinixUseCase.generalInformation.id && (
            <GeneralInformationForm
              handleSubmit={() => handleNextStep(currentStep)}
              withSubmitButtons
            />
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerButton.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Opciones botón cliente servidor"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.downloadableDocuments.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Documentos descargables"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.webReports.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Reportes web"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.webOptions.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Opciones web"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerReports.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Reportes cliente servidor"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerOptions.id && (
            <ItemNotFound
              image={itemNotFound}
              title={"Opciones cliente servidor"}
              description={"Esta sección está en construcción."}
              buttonDescription={"Retorna a la página de inicio"}
              route={"/privileges/linixUseCase"}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.summary.id && (
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

export { AddingLinixUseCaseUI };
