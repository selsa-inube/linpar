import { MdArrowBack } from "react-icons/md";

import { Button, Grid, Stack, inube } from "@inube/design-system";
import { BoxAttribute } from "@components/data/BoxAttirbute";
import { Accordion } from "@components/data/Accordion";

import { IDataVerificationStep } from "./types";

interface IVerificationAddPositionUIProps {
  dataVerificationStep: IDataVerificationStep[];
  keySections: string[];
  isMobile: boolean;
  setCurrentStep: (step: number) => void;
}

export const VerificationAddPositionUI = (
  props: IVerificationAddPositionUIProps
) => {
  const { dataVerificationStep, keySections, isMobile, setCurrentStep } = props;

  return (
    <Stack gap={inube.spacing.s100} direction="column">
      {
        dataVerificationStep.map((dataStept) =>
          keySections.map((keySection, index) => (
            // dataVerificationStep[0].sections[keySection].attributes.length >
            //   0 && (
            <Accordion
              key={keySection}
              title={dataStept.sections[keySection].title}
            >
              <Grid
                templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
                width="-webkit-fill-available"
                autoRows="auto"
                gap="s200"
              >
                {dataStept.sections[keySection].attributes.map((attribute) => (
                  <BoxAttribute
                    key={attribute.attribute}
                    attribute={attribute.attribute}
                    value={attribute.value}
                  />
                ))}
              </Grid>
              <Stack justifyContent="flex-end" width="100%">
                <Button
                  variant="none"
                  appearance="dark"
                  spacing="compact"
                  iconBefore={<MdArrowBack />}
                  onClick={() => setCurrentStep(index)}
                >
                  Regresar a este paso
                </Button>
              </Stack>
            </Accordion>
          ))
        )
        // )
      }
    </Stack>
  );
};
