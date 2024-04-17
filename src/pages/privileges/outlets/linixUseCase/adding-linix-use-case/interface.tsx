import {
  Assisted,
  Breadcrumbs,
  Stack,
  useMediaQuery,
  inube,
  Button,
} from "@inube/design-system";

import { DecisionModal } from "@components/feedback/DecisionModal";
import { PageTitle } from "@components/PageTitle";
import { InitializerForm } from "@pages/privileges/outlets/forms/InitializerForm";

import {
  CrateLinixUseCaseConfig,
  finishAssistedModalConfig,
  stepsAddingLinixUseCase,
} from "./config/addingLinixUseCase.config";
import { StyledAssistedContainer } from "./styles";
import { GeneralInformationForm } from "./forms/GeneralInformationForm";
import { ClientServerButtonSelection } from "./forms/ClientServerButtonSelection";
import {
  IFormAddLinixUseCase,
  IHandleChangeFormData,
  IFormAddLinixUseCaseRef,
} from "./types";
import { VerificationForm } from "./forms/VerificationForm";
import { saveLinixUseCase } from "./utils";

function finishModal(
  handleCloseModal: () => void,
  formData: IFormAddLinixUseCase
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
      handleClick={() => saveLinixUseCase(formData)}
    />
  );
}

interface AddingLinixUseCaseUIProps {
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  currentStep: number;
  handleToggleModal: () => void;
  showModal: boolean;
  formData: IFormAddLinixUseCase;
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  csOptions: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
  formReferences: IFormAddLinixUseCaseRef;
}

function AddingLinixUseCaseUI(props: AddingLinixUseCaseUIProps) {
  const {
    currentStep,
    handleToggleModal,
    showModal,
    handlePrevStep,
    handleNextStep,
    formData,
    handleUpdateFormData,
    csOptions,
    webOptions,
    formReferences,
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
                  : () => handleNextStep(currentStep + 1)
              }
            />
          </StyledAssistedContainer>

          {currentStep === stepsAddingLinixUseCase.generalInformation.id && (
            <GeneralInformationForm
              csOptions={csOptions}
              webOptions={webOptions}
              handleSubmit={handleUpdateFormData}
              initialValues={formData.generalInformation.values}
              ref={formReferences.generalInformation}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerButton.id && (
            <ClientServerButtonSelection
              csSelected={formData.generalInformation.values.k_Opcion}
              handleSubmit={handleUpdateFormData}
              initialValues={formData.clientServerButton.values}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.downloadableDocuments.id && (
            <InitializerForm
              dataOptionsForms={formData.downloadableDocuments.values}
              handleSubmit={handleUpdateFormData}
            />
          )}

          {currentStep === stepsAddingLinixUseCase.webReports.id && (
            <InitializerForm
              dataOptionsForms={formData.webReports.values}
              handleSubmit={handleUpdateFormData}
            />
          )}

          {currentStep === stepsAddingLinixUseCase.webOptions.id && (
            <InitializerForm
              dataOptionsForms={formData.webOptions.values}
              handleSubmit={handleUpdateFormData}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerReports.id && (
            <InitializerForm
              dataOptionsForms={formData.clientServerReports.values}
              handleSubmit={handleUpdateFormData}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.clientServerOptions.id && (
            <InitializerForm
              dataOptionsForms={formData.clientServerOptions.values}
              handleSubmit={handleUpdateFormData}
            />
          )}
          {currentStep === stepsAddingLinixUseCase.summary.id && (
            <VerificationForm
              formData={formData}
              handleStepChange={handleNextStep}
            />
          )}
        </>
        <Stack gap={inube.spacing.s200} justifyContent="flex-end">
          <Button
            onClick={handlePrevStep}
            type="button"
            disabled={currentStep === 1}
            spacing="compact"
            variant="none"
            appearance="gray"
          >
            Atrás
          </Button>

          <Button
            onClick={
              currentStep === Object.values(stepsAddingLinixUseCase).length
                ? () => saveLinixUseCase(formData)
                : handleNextStep
            }
            spacing="compact"
          >
            {currentStep === Object.values(stepsAddingLinixUseCase).length
              ? "Enviar"
              : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
      {showModal && finishModal(handleToggleModal, formData)}
    </Stack>
  );
}

export { AddingLinixUseCaseUI };
