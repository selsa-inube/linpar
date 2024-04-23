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
  titleButtonTextAssited,
} from "./types";
import { VerificationForm } from "./forms/VerificationForm";
import { saveLinixUseCase } from "./utils";
import { buttonOptionsMock } from "@src/mocks/privileges/button/buttonOptionsMock.mock";

function finishModal(
  handleCloseModal: () => void,
  handleFinishForm: () => void
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
      handleClick={handleFinishForm}
    />
  );
}

const renderStepContent = (
  currentStep: number,
  formReferences: IFormAddLinixUseCaseRef,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  csOptions: Record<string, unknown>[],
  webOptions: Record<string, unknown>[],
  handleStepChange: (stepId: number) => void,
  handleUpdateFormData: (values: IHandleChangeFormData) => void,
  handleNextStep: (step: number) => void,
  formData: IFormAddLinixUseCase
) => {
  return (
    <>
      {currentStep === stepsAddingLinixUseCase.generalInformation.id && (
        <GeneralInformationForm
          initialValues={formData.generalInformation.values}
          handleSubmit={handleUpdateFormData}
          csOptions={csOptions}
          webOptions={webOptions}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
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
  );
};

interface AddingLinixUseCaseUIProps {
  handleFinishForm: () => void;
  handleNextStep: (step: number) => void;
  handlePrevStep: (step: number) => void;
  currentStep: number;
  handleToggleModal: () => void;
  showModal: boolean;
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  csOptions: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
  formReferences: IFormAddLinixUseCaseRef;
  handleStepChange: (stepId: number) => void;
  formData: IFormAddLinixUseCase;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  isCurrentFormValid: boolean;
  selectOptions: boolean;
}

function AddingLinixUseCaseUI(props: AddingLinixUseCaseUIProps) {
  const {
    handleFinishForm,
    currentStep,
    handleToggleModal,
    showModal,
    handlePrevStep,
    handleNextStep,
    formData,
    handleUpdateFormData,
    csOptions,
    setIsCurrentFormValid,
    handleStepChange,
    webOptions,
    formReferences,
    isCurrentFormValid,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const optionValidations = () => {
    const validate = buttonOptionsMock.filter(
      (buttonOptions) =>
        buttonOptions.OPCION_CLIENTE_SERVIDOR ===
        formData.generalInformation.values.k_Opcion
    );
    if (
      currentStep === Object.values(stepsAddingLinixUseCase).length &&
      validate.length !== 0
    ) {
      saveLinixUseCase(formData);
    } else if (validate.length === 0 && currentStep === 1) {
      handleNextStep(3);
    } else {
      handleNextStep(currentStep + 1);
    }
  };
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
          <StyledAssistedContainer cursorDisabled={!isCurrentFormValid}>
            <Assisted
              steps={Object.values(stepsAddingLinixUseCase)}
              currentStepId={currentStep}
              handlePrev={
                (formData.generalInformation.values.k_Opcion === "" &&
                  currentStep === 3) ||
                (formData.clientServerButton.values.csButtonOption === "" &&
                  currentStep === 3)
                  ? () => {
                      handleNextStep(1);
                    }
                  : handlePrevStep
              }
              handleNext={() => {
                const nextStep =
                  currentStep === Object.values(stepsAddingLinixUseCase).length
                    ? (handleToggleModal(), currentStep)
                    : currentStep === 1 &&
                      !buttonOptionsMock.some(
                        (buttonOptions) =>
                          buttonOptions.OPCION_CLIENTE_SERVIDOR ===
                          formData.generalInformation.values.k_Opcion
                      )
                    ? 3
                    : currentStep + 1;
                handleNextStep(nextStep);
              }}
              titleButtonText={titleButtonTextAssited}
            />
          </StyledAssistedContainer>
          {renderStepContent(
            currentStep,
            formReferences,
            setIsCurrentFormValid,
            csOptions,
            webOptions,
            handleStepChange,
            handleUpdateFormData,
            handleNextStep,
            formData
          )}
        </>
        <Stack gap={inube.spacing.s200} justifyContent="flex-end">
          <Button
            onClick={
              (formData.generalInformation.values.k_Opcion === "" &&
                currentStep === 3) ||
              (formData.clientServerButton.values.csButtonOption === "" &&
                currentStep === 3)
                ? () => {
                    handleNextStep(1);
                  }
                : handlePrevStep
            }
            type="button"
            disabled={currentStep === 1}
            spacing="compact"
            variant="none"
            appearance="gray"
          >
            Atrás
          </Button>

          <Button
            onClick={() => {
              if (
                currentStep === Object.values(stepsAddingLinixUseCase).length
              ) {
                handleFinishForm();
              } else {
                optionValidations();
              }
            }}
            ing="compact"
            disabled={!isCurrentFormValid}
          >
            {currentStep === Object.values(stepsAddingLinixUseCase).length
              ? "Enviar"
              : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
      {showModal && finishModal(handleToggleModal, handleFinishForm)}
    </Stack>
  );
}

export { AddingLinixUseCaseUI };
