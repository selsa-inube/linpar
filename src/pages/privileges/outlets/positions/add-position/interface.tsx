import {
  Assisted,
  Breadcrumbs,
  Button,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { DecisionModal } from "@src/components/feedback/DecisionModal";
import { RenderMessage } from "@src/components/feedback/RenderMessage";

import {
  createPositionConfig,
  finishAssistedModalConfig,
  stepsAddPosition,
} from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  IStep,
  titleButtonTextAssited,
} from "./types";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { StyledContainerAssisted } from "./styles";
import { InitializerForm } from "../../forms/InitializerForm";
import { VerificationAddPosition } from "../components/VerificationForm";
import { IMessageState } from "../../users/types/forms.types";

const renderStepContent = (
  currentStep: number,
  formReferences: IFormAddPositionRef,
  dataAddPositionLinixForm: IFormAddPosition,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <>
      {currentStep === stepsAddPosition.generalInformation.id && (
        <GeneralInformationForm
          initialValues={dataAddPositionLinixForm.generalInformation.values}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep === stepsAddPosition.roles.id && (
        <InitializerForm
          dataOptionsForms={dataAddPositionLinixForm.roles.values}
          handleSubmit={handleUpdateDataSwitchstep}
        />
      )}
      {currentStep === stepsAddPosition.summary.id && (
        <VerificationAddPosition
          steps={dataAddPositionLinixForm}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};

interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  showModal: boolean;
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  loading: boolean;
  message: IMessageState;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void;
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>;
  handleToggleModal: () => void;
  handleFinishForm: () => void;
  handleCloseSectionMessage: () => void;
  validateActiveRoles: () => boolean;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStep,
    steps,
    showModal,
    isCurrentFormValid,
    dataAddPositionLinixForm,
    formReferences,
    loading,
    message,
    setIsCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    handleUpdateDataSwitchstep,
    setCurrentStep,
    handleToggleModal,
    handleFinishForm,
    handleCloseSectionMessage,
    validateActiveRoles,
  } = props;

  const { title, description, actionText, appearance } =
    finishAssistedModalConfig;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const disabled = !isCurrentFormValid || validateActiveRoles();

  return (
    <Stack direction="column" padding={smallScreen ? "s200" : "s400 s800"}>
      <Stack gap={inube.spacing.s600} direction="column">
        <Stack gap={inube.spacing.s400} direction="column">
          <Breadcrumbs crumbs={createPositionConfig[0].crumbs} />
          <Stack
            justifyContent="space-between"
            alignItems="center"
            gap={inube.spacing.s650}
          >
            <PageTitle
              title={createPositionConfig[0].title}
              description={createPositionConfig[0].description}
              navigatePage="/privileges/positions"
            />
          </Stack>
        </Stack>
        <>
          <StyledContainerAssisted $cursorDisabled={disabled}>
            <Assisted
              steps={steps}
              currentStepId={currentStep}
              handlePrev={handlePreviousStep}
              handleNext={handleNextStep}
              titleButtonText={titleButtonTextAssited}
            />
          </StyledContainerAssisted>
          {renderStepContent(
            currentStep,
            formReferences,
            dataAddPositionLinixForm,
            setIsCurrentFormValid,
            handleUpdateDataSwitchstep,
            setCurrentStep
          )}
        </>
        <Stack gap={inube.spacing.s200} justifyContent="flex-end">
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
            disabled={disabled}
          >
            {currentStep === steps.length ? "Enviar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
      {showModal && (
        <DecisionModal
          title={title}
          description={description}
          actionText={actionText}
          loading={loading}
          appearance={appearance}
          closeModal={handleToggleModal}
          handleClick={handleFinishForm}
        />
      )}
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleCloseSectionMessage}
        />
      )}
    </Stack>
  );
}
