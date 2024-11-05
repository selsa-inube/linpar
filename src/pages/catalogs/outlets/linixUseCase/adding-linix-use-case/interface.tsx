import { useContext } from "react";
import { Assisted, useMediaQuery, inube, Button } from "@inube/design-system";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { PageTitle } from "@components/PageTitle";
import { RenderMessage } from "@components/feedback/RenderMessage";
import { Stack } from "@inubekit/stack";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { LoadingApp } from "@pages/login/outlets/LoadingApp";
import { Option } from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/config/selectLinixUseCase.config";
import { LinparContext } from "@context/AppContext";
import { Breadcrumbs } from "@inubekit/breadcrumbs";
import {
  CrateLinixUseCaseConfig,
  finishAssistedModalConfig,
  finishAssistedModalConfigWithErrors,
  stepsAddingLinixUseCase,
} from "./config/addingLinixUseCase.config";
import { StyledAssistedContainer } from "./styles";

import {
  IFormAddLinixUseCase,
  IHandleChangeFormData,
  IFormAddLinixUseCaseRef,
  titleButtonTextAssited,
} from "./types";

import { saveLinixUseCase } from "./utils";
import { GeneralInformationForm } from "../components/GeneralInformationForm";

import { ClientServerButtonSelection } from "../components/ClientServerButtonSelection";
import { VerificationAddLinixUseCase } from "../components/VerificationForm";
import { InitializerForm } from "../components/InitializerForm";

function finishModal(
  handleCloseModal: () => void,
  loading: boolean,
  handleFinishForm: () => void,
  withErrors: boolean,
  resetCurrentStep: () => void
) {
  const modalConfig = withErrors
    ? finishAssistedModalConfigWithErrors
    : finishAssistedModalConfig;

  const { title, description, actionText, appearance } = modalConfig;

  return (
    <DecisionModal
      title={title}
      description={description}
      actionText={actionText}
      loading={loading}
      appearance={appearance}
      closeModal={handleCloseModal}
      handleClick={withErrors ? resetCurrentStep : handleFinishForm}
    />
  );
}

const renderStepContent = (
  currentStep: number,
  selectLinixUseCase: Option[],
  formReferences: IFormAddLinixUseCaseRef,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  csOptions: Record<string, unknown>[],
  webOptions: Record<string, unknown>[],
  handleStepChange: (stepId: number) => void,
  handleUpdateFormData: (values: IHandleChangeFormData) => void,
  handleNextStep: (step: number) => void,
  formData: IFormAddLinixUseCase,
  filterNForma: string,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <>
      {currentStep === stepsAddingLinixUseCase.generalInformation.id && (
        <GeneralInformationForm
          initialValues={formData.generalInformation.values}
          handleSubmit={handleUpdateFormData}
          csOptions={csOptions}
          selectLinixUseCase={selectLinixUseCase}
          webOptions={webOptions}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === stepsAddingLinixUseCase.clientServerButton.id && (
        <ClientServerButtonSelection
          id={filterNForma as string}
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
        <VerificationAddLinixUseCase
          steps={formData}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};

interface AddingLinixUseCaseUIProps {
  selectLinixUseCase: Option[];
  csOptionsButtons: Record<string, unknown>[];
  message: IMessageState;
  loading: boolean;
  loadingButton: boolean;
  onCloseSectionMessage: () => void;
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
  filterNForma: string;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
}

function AddingLinixUseCaseUI(props: AddingLinixUseCaseUIProps) {
  const {
    selectLinixUseCase,
    csOptionsButtons,
    message,
    onCloseSectionMessage,
    loading,
    loadingButton,
    handleFinishForm,
    currentStep,
    handleToggleModal,
    handlePrevStep,
    showModal,
    handleNextStep,
    formData,
    handleUpdateFormData,
    csOptions,
    setIsCurrentFormValid,
    handleStepChange,
    webOptions,
    formReferences,
    isCurrentFormValid,
    filterNForma,
    setCurrentStep,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const resetCurrentStep = () => {
    setCurrentStep(1);
  };
  const { linparData } = useContext(LinparContext);
  const optionValidations = () => {
    if (
      currentStep === Object.values(stepsAddingLinixUseCase).length &&
      csOptionsButtons.length !== 0
    ) {
      saveLinixUseCase(
        formData,
        filterNForma,
        linparData.businessUnit.businessUnitPublicCode,
        csOptionsButtons
      );
    } else if (csOptionsButtons.length === 0 && currentStep === 1) {
      handleNextStep(3);
    } else {
      handleNextStep(currentStep + 1);
    }
  };

  return (
    <>
      {loading ? (
        <LoadingApp />
      ) : (
        <Stack direction="column" padding={smallScreen ? "16px" : "32px 64px"}>
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
                  navigatePage="/catalogs/linixUseCase"
                />
              </Stack>
            </Stack>
            <>
              <StyledAssistedContainer $cursorDisabled={!isCurrentFormValid}>
                <Assisted
                  steps={Object.values(stepsAddingLinixUseCase)}
                  currentStepId={currentStep}
                  handlePrev={() => {
                    const prevStep =
                      currentStep ===
                      Object.values(stepsAddingLinixUseCase).length
                        ? currentStep - 1
                        : currentStep === 3 && csOptionsButtons.length === 0
                        ? 1
                        : currentStep - 1;
                    handlePrevStep(prevStep);
                  }}
                  handleNext={() => {
                    let nextStep = currentStep + 1;
                    if (
                      currentStep ===
                      Object.values(stepsAddingLinixUseCase).length
                    ) {
                      handleToggleModal();
                      return;
                    }
                    if (currentStep === 1 && csOptionsButtons.length === 0) {
                      nextStep = 3;
                    }
                    handleNextStep(nextStep);
                  }}
                  titleButtonText={titleButtonTextAssited}
                />
              </StyledAssistedContainer>
              {renderStepContent(
                currentStep,
                selectLinixUseCase,
                formReferences,
                setIsCurrentFormValid,
                csOptions,
                webOptions,
                handleStepChange,
                handleUpdateFormData,
                handleNextStep,
                formData,
                filterNForma,
                setCurrentStep
              )}
            </>
            <Stack gap={inube.spacing.s200} justifyContent="flex-end">
              <Button
                onClick={() => {
                  const prevStep =
                    currentStep ===
                    Object.values(stepsAddingLinixUseCase).length
                      ? currentStep - 1
                      : currentStep === 3 &&
                        !csOptionsButtons.some(
                          (buttonOptions) =>
                            buttonOptions.OPCION_CLIENTE_SERVIDOR ===
                            formData.generalInformation.values.k_Opcion
                        )
                      ? 1
                      : currentStep - 1;
                  handlePrevStep(prevStep);
                }}
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
                    currentStep ===
                    Object.values(stepsAddingLinixUseCase).length
                  ) {
                    handleToggleModal();
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
              {message.visible && (
                <RenderMessage
                  message={message}
                  handleCloseMessage={onCloseSectionMessage}
                  onMessageClosed={onCloseSectionMessage}
                />
              )}
            </Stack>
          </Stack>

          {showModal &&
            finishModal(
              handleToggleModal,
              loadingButton,
              handleFinishForm,
              formData.generalInformation.values.k_Opcion === "" &&
                formData.generalInformation.values.k_Funcio === "",
              resetCurrentStep
            )}
        </Stack>
      )}
    </>
  );
}

export { AddingLinixUseCaseUI };
