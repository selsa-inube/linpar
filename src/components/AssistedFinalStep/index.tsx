import { MdArrowBack } from "react-icons/md";
import { Button, Grid, Stack, useMediaQuery } from "@inube/design-system";
import { Accordion } from "../data/Accordion";
import { BoxAttribute } from "../data/BoxAttirbute";
import { IFormAddLinixUseCase } from "@src/pages/privileges/outlets/linixUseCase/adding-linix-use-case";

export interface IControllerAccordionProps {
  formData: IFormAddLinixUseCase;
  handleStepChange: (stepId: number) => void;
}

export const ControllerAccordion = (props: IControllerAccordionProps) => {
  const { formData, handleStepChange } = props;
  const isMobile = useMediaQuery("(max-width: 740px)");
  const generalInformation = formData.generalInformation.values;

  const webOptions = formData.webOptions.values.filter(
    (value) => value.isActive
  );
  const clientServerOptions = formData.clientServerOptions.values.filter(
    (value) => value.isActive
  );

  return (
    <Stack gap="8px" direction="column">
      <>
        <Accordion
          key={"Informacion general"}
          title={"Informacion general"}
          defaultOpen={!isMobile}
        >
          <Grid
            templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
            width="-webkit-fill-available"
            autoRows="auto"
            gap="s200"
          >
            <BoxAttribute
              attribute="Nombre del caso de uso:"
              value={generalInformation.n_Usecase}
            />
            <BoxAttribute
              attribute="Descripción:"
              value={generalInformation.n_Descrip}
            />
            <BoxAttribute
              attribute="Acción caso de uso:"
              value={generalInformation.i_Tipusec}
            />
            <BoxAttribute
              attribute="Opciones Web:"
              value={webOptions.map((option) => option.value).join(", ")}
            />
            <BoxAttribute
              attribute="Opción cliente servidor:"
              value={clientServerOptions
                .map((option) => option.value)
                .join(", ")}
            />
          </Grid>
          <Stack justifyContent="flex-end" width="100%">
            <Button
              variant="none"
              appearance="dark"
              spacing="compact"
              iconBefore={<MdArrowBack />}
              onClick={() => handleStepChange(0)}
              type="link"
            >
              Regresar a este paso
            </Button>
          </Stack>
        </Accordion>
      </>
    </Stack>
  );
};
