import {
  Assisted,
  Breadcrumbs,
  Stack,
  useMediaQuery,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { PageTitle } from "@components/PageTitle";

import {
  CrateLinixUseCaseConfig,
  finishAssistedModalConfig,
  stepsAddingLinixUseCase,
} from "./config/addingLinixUseCase.config";
import { StyledAssistedContainer } from "./styles";

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
      <Stack gap="48px" direction="column">
        <Stack gap="32px" direction="column">
          <Breadcrumbs crumbs={CrateLinixUseCaseConfig[0].crumbs} />
          <Stack justifyContent="space-between" alignItems="center" gap="50px">
            <PageTitle
              title={CrateLinixUseCaseConfig[0].title}
              description={CrateLinixUseCaseConfig[0].description}
              navigatePage="/privileges/linixUseCase"
            />
          </Stack>
        </Stack>
        <>
          <StyledAssistedContainer>
            {" "}
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
            <div>información general</div>
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerButton.id && (
            <div>opciones botón cliente servidor</div>
          )}
          {currentStep === stepsAddingLinixUseCase.downloadableDocuments.id && (
            <div>documentos descargables </div>
          )}
          {currentStep === stepsAddingLinixUseCase.webReports.id && (
            <div>reportes web</div>
          )}
          {currentStep === stepsAddingLinixUseCase.webOptions.id && (
            <div>opciones web</div>
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerReports.id && (
            <div>Reportes cliente servidor</div>
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerOptions.id && (
            <div>Opciones cliente servidor</div>
          )}
          {currentStep === stepsAddingLinixUseCase.summary.id && (
            <div>Resumen</div>
          )}
        </>
      </Stack>
      {showModal && finishModal(handleToggleModal, handleCompleteInvitation)}
    </Stack>
  );
}

export { AddingLinixUseCaseUI };
