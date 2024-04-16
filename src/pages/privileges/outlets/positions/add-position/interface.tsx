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
import { createPositionConfig } from "./config/addPosition.config";

interface AddPositionUIProps {
  currentStep: number;
  steps: IStep[];
  handleNextStep: () => void;
  handlePreviousStep: () => void;
}

export function AddPositionUI(props: AddPositionUIProps) {
  const { currentStep, steps, handleNextStep, handlePreviousStep } = props;

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
          <Assisted
            steps={steps}
            currentStepId={currentStep}
            handlePrev={handlePreviousStep}
            handleNext={handleNextStep}
          />
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
            onClick={currentStep === steps.length ? () => [] : handleNextStep}
            spacing="compact"
          >
            {currentStep === steps.length ? "Enviar" : "Siguiente"}
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
}
