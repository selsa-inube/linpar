import { MdArrowBack } from "react-icons/md";
import { inube } from "@inube/design-system";

import { BoxAttribute } from "@components/data/BoxAttirbute";
import { Accordion } from "@components/data/Accordion";
import { Stack } from "@inubekit/stack";
import { Button } from "@inubekit/button";
import { IDataVerificationStep } from ".";
import { SyledContainerCard } from "./styles";

interface IVerificationAddRoleUIProps {
  dataVerificationStep: IDataVerificationStep[];
  keySections: string[];
  isMobile: boolean;
  setCurrentStep: (step: number) => void;
}

export const VerificationAddRoleUI = (props: IVerificationAddRoleUIProps) => {
  const { dataVerificationStep, keySections, setCurrentStep } = props;

  return (
    <Stack gap={inube.spacing.s100} direction="column">
      {dataVerificationStep.map((dataStept) =>
        keySections.map(
          (keySection, index) =>
            dataVerificationStep[0].sections[keySection].attributes.length >
              0 && (
              <Accordion
                key={keySection}
                title={dataStept.sections[keySection].title}
              >
                <SyledContainerCard>
                  {dataStept.sections[keySection].attributes.map(
                    (attribute) => (
                      <BoxAttribute
                        key={attribute.attribute}
                        attribute={attribute.attribute}
                        value={attribute.value}
                      />
                    )
                  )}
                </SyledContainerCard>

                <Stack justifyContent="flex-end" width="100%">
                  <Button
                    variant="none"
                    appearance="dark"
                    spacing="compact"
                    iconBefore={<MdArrowBack />}
                    onClick={() => setCurrentStep(index + 1)}
                  >
                    Regreasar a este paso
                  </Button>
                </Stack>
              </Accordion>
            )
        )
      )}
    </Stack>
  );
};
