import { MdArrowBack } from "react-icons/md";
import { Button, Grid, Stack, useMediaQuery } from "@inube/design-system";

import { BoxAttribute } from "../../BoxAttirbute";
import { MockDataSummaryPage } from "./Accordion.stories";
import { Accordion } from "..";

export interface IControllerAccordionProps {
  steps: MockDataSummaryPage;
}

export const ControllerAccordion = (props: IControllerAccordionProps) => {
  const { steps } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  return (
    <Stack gap="8px" direction="column">
      {steps.map((step) => {
        const { section, attributes } = step;
        return (
          <Accordion key={section} title={section}>
            <Grid
              templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              width="-webkit-fill-available"
              autoRows="auto"
            >
              {attributes.map((attribute) => (
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
                type="link"
                path={step.attributesButton.path}
              >
                {step.attributesButton.text}
              </Button>
            </Stack>
          </Accordion>
        );
      })}
    </Stack>
  );
};
