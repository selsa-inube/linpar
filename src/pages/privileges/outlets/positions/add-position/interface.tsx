import {
  Assisted,
  Breadcrumbs,
  Button,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { PageTitle } from "@components/PageTitle";

import { IStep } from "../types";
import {
  createPositionConfig,
  stepsAddPosition,
} from "./config/addPosition.config";
import {
  IFormAddPosition,
  IFormAddPositionRef,
  IOptionInitialiceEntry,
  titleButtonTextAssited,
} from "./types";
import { GeneralInformationForm } from "./forms/GeneralInformationForm";
import { StyledContainerAssisted } from "./styles";
import { InitializerForm } from "../../forms/InitializerForm";

const renderStepContent = (
  currentStep: number,
  formReferences: IFormAddPositionRef,
  dataAddPositionLinixForm: IFormAddPosition,
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>,
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void
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
    </>
  );
};

interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  isCurrentFormValid: boolean;
  dataAddPositionLinixForm: IFormAddPosition;
  formReferences: IFormAddPositionRef;
  setIsCurrentFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  handleNextStep: () => void;
  handlePreviousStep: () => void;
  handleUpdateDataSwitchstep: (values: IOptionInitialiceEntry[]) => void;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const {
    currentStep,
    steps,
    isCurrentFormValid,
    dataAddPositionLinixForm,
    formReferences,
    setIsCurrentFormValid,
    handleNextStep,
    handlePreviousStep,
    handleUpdateDataSwitchstep,
  } = props;

  const smallScreen = useMediaQuery("(max-width: 580px)");

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
          <StyledContainerAssisted cursorDisabled={!isCurrentFormValid}>
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
            handleUpdateDataSwitchstep
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
            disabled={!isCurrentFormValid}
          >
            {currentStep === steps.length ? "Enviar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
