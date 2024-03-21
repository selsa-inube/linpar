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
  const clientServerButton = formData.clientServerButton.values;
  const downloadableDocuments = formData.downloadableDocuments.values;
  const webReports = formData.webReports.values;
  const webOptions = formData.webOptions.values;

  const clientServerOptions = formData.clientServerOptions.values.filter(
    (value) => value.isActive
  );

  const selectedWebOption = formData.webOptions.values.filter(
    (option) => option.isActive
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
            {webOptions
              .filter((option) => option.isActive)
              .slice(0, 1)
              .map((option) => (
                <BoxAttribute
                  key={option.id}
                  attribute="Opción Web:"
                  value={option.value}
                />
              ))}
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
      <>
        <Accordion
          key={"Selección cliente servidor"}
          title={"Selección cliente servidor"}
          defaultOpen={!isMobile}
        >
          <BoxAttribute
            attribute="Selección cliente servidor:"
            value={clientServerButton.csButtonOption}
          />
          <Stack justifyContent="flex-end" width="100%">
            <Button
              variant="none"
              appearance="dark"
              spacing="compact"
              iconBefore={<MdArrowBack />}
              onClick={() => handleStepChange(1)}
              type="link"
            >
              Regresar a este paso
            </Button>
          </Stack>
        </Accordion>
      </>
      <>
        <Accordion
          key={"Formatos descargables"}
          title={"Formatos descargables"}
          defaultOpen={!isMobile}
        >
          <Grid
            templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
            width="-webkit-fill-available"
            autoRows="auto"
            gap="s200"
          >
            <>
              {downloadableDocuments
                .filter((option) => option.isActive)
                .map((option, index) => (
                  <BoxAttribute
                    key={index}
                    attribute={`Formato descargable:`}
                    value={option.value}
                  />
                ))}
            </>
          </Grid>
          <Stack justifyContent="flex-end" width="100%">
            <Button
              variant="none"
              appearance="dark"
              spacing="compact"
              iconBefore={<MdArrowBack />}
              onClick={() => handleStepChange(2)}
              type="link"
            >
              Regresar a este paso
            </Button>
          </Stack>
        </Accordion>
      </>
      <>
        <Accordion
          key={"Reportes web"}
          title={"Reportes web"}
          defaultOpen={!isMobile}
        >
          <Grid
            templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
            width="-webkit-fill-available"
            autoRows="auto"
            gap="s200"
          >
            <>
              {webReports
                .filter((option) => option.isActive)
                .map((option, index) => (
                  <BoxAttribute
                    key={index}
                    attribute={`Reportes web:`}
                    value={option.value}
                  />
                ))}
            </>
          </Grid>
          <Stack justifyContent="flex-end" width="100%">
            <Button
              variant="none"
              appearance="dark"
              spacing="compact"
              iconBefore={<MdArrowBack />}
              onClick={() => handleStepChange(3)}
              type="link"
            >
              Regresar a este paso
            </Button>
          </Stack>
        </Accordion>
        <>
          <Accordion
            key={"Opciones web"}
            title={"Opciones web"}
            defaultOpen={!isMobile}
          >
            <Grid
              templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              width="-webkit-fill-available"
              autoRows="auto"
              gap="s200"
            >
              <>
                {selectedWebOption.map((option) => (
                  <BoxAttribute
                    key={option.id}
                    attribute={`Opción web:`}
                    value={option.value}
                  />
                ))}
              </>
            </Grid>
            <Stack justifyContent="flex-end" width="100%">
              <Button
                variant="none"
                appearance="dark"
                spacing="compact"
                iconBefore={<MdArrowBack />}
                onClick={() => handleStepChange(4)}
                type="link"
              >
                Regresar a este paso
              </Button>
            </Stack>
          </Accordion>
        </>
      </>
    </Stack>
  );
};
