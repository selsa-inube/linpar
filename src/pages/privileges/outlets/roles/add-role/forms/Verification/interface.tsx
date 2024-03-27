import { Button, Grid, Stack } from "@inube/design-system";
import { MdArrowBack } from "react-icons/md";
import { BoxAttribute } from "@components/data/BoxAttirbute";
import { Accordion } from "@src/components/data/Accordion";
import { DataVerificationStep } from ".";

interface IVerificationAddRoleUIProps {
  dataVerificationStep: DataVerificationStep[];
  keySections: string[];
  isMobile: boolean;
}

export const VerificationAddRoleUI = (props: IVerificationAddRoleUIProps) => {
  const { dataVerificationStep, keySections, isMobile } = props;

  return (
    <Stack gap="8px" direction="column">
      {dataVerificationStep.map((dataStept) =>
        keySections.map(
          (keySection: string) =>
            dataVerificationStep[0].sections[keySection].attributes.length >
              0 && (
              <Accordion
                key={keySection}
                title={dataStept.sections[keySection].title}
              >
                <Grid
                  templateColumns={
                    isMobile ||
                    keySection === "transactionTypes" ||
                    keySection === "businessRules"
                      ? "1fr"
                      : "repeat(2, 1fr)"
                  }
                  width="-webkit-fill-available"
                  autoRows="auto"
                  gap="s200"
                >
                  {dataStept.sections[keySection].attributes.map(
                    (attribute) => (
                      <BoxAttribute
                        key={attribute.attribute}
                        attribute={attribute.attribute}
                        value={attribute.value}
                      />
                    )
                  )}
                </Grid>
                <Stack justifyContent="flex-end" width="100%">
                  <Button
                    variant="none"
                    appearance="dark"
                    spacing="compact"
                    iconBefore={<MdArrowBack />}
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
