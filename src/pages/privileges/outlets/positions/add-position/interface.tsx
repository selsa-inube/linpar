import { Breadcrumbs, Stack, useMediaQuery, inube } from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";
import { DecisionModal } from "@components/feedback/DecisionModal";
import { RenderMessage } from "@components/feedback/RenderMessage";

import {
  createPositionConfig,
  finishAssistedModalConfig,
  stepsAddPosition,
} from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  titleButtonTextAssited,
} from "./types";
import { GeneralInformationForm } from "../components/GeneralInformationForm";
import { InitializerForm } from "../../forms/InitializerForm";
import { VerificationAddPosition } from "../components/VerificationForm";
import { IMessageState } from "../../users/types/forms.types";
import { Assisted, IAssistedStep } from "@inubekit/assisted";
import { Button } from "@inubekit/button";

const renderStepContent = (
  currentStep: any,
  formReferences: IFormAddPositionRef,
  dataAddPositionLinixForm: IFormAddPosition,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void,
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
) => {
  return (
    <>
      {currentStep.number === stepsAddPosition[0].number && (
        <GeneralInformationForm
          initialValues={dataAddPositionLinixForm.generalInformation.values}
          ref={formReferences.generalInformation}
          onFormValid={setIsCurrentFormValid}
        />
      )}
      {currentStep.number === stepsAddPosition[1].number && (
        <InitializerForm
          dataOptionsForms={dataAddPositionLinixForm.rolesPorCargos.values}
          handleSubmit={handleUpdateDataSwitchstep}
        />
      )}
      {currentStep.number === stepsAddPosition[2].number && (
        <VerificationAddPosition
          steps={dataAddPositionLinixForm}
          setCurrentStep={setCurrentStep}
        />
      )}
    </>
  );
};

interface AddPositionUIProps {
  currentStep: any;
  step: IAssistedStep[];
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
  handleToggleModal: () => void;
  handleFinishForm: () => void;
  handleCloseSectionMessage: () => void;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStep,
    step,
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
    handleToggleModal,
    handleFinishForm,
    handleCloseSectionMessage,
  } = props;

  const { title, description, actionText, appearance } =
    finishAssistedModalConfig;

  const smallScreen = useMediaQuery("(max-width: 580px)");
  const disabled = !isCurrentFormValid;
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
          <Assisted
            step={currentStep}
            onBackClick={handlePreviousStep}
            onNextClick={handleNextStep}
            onSubmitClick={handleNextStep}
            controls={titleButtonTextAssited}
            totalSteps={step.length}
            disableBack={currentStep === 1}
          />
          {renderStepContent(
            currentStep,
            formReferences,
            dataAddPositionLinixForm,
            setIsCurrentFormValid,
            handleUpdateDataSwitchstep,
            currentStep.number
          )}
        </>
        <Stack gap={inube.spacing.s200} justifyContent="flex-end">
          <Button
            onClick={handlePreviousStep}
            type="button"
            disabled={currentStep === step[0].id}
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
            {currentStep === step.length ? "Enviar" : "Siguiente"}
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
