import { MdArrowBack } from "react-icons/md";
import {
  Button,
  Grid,
  Stack,
  useMediaQuery,
  inube,
} from "@inube/design-system";

import { Accordion } from "@components/data/Accordion";
import { BoxAttribute } from "@components/data/BoxAttirbute";

import { IFormAddLinixUseCase } from "../../types";

export interface IControllerAccordionProps {
  formData: IFormAddLinixUseCase;
  handleStepChange: (stepId: number) => void;
}

export const VerificationForm = (props: IControllerAccordionProps) => {
  const { formData, handleStepChange } = props;
  const isMobile = useMediaQuery("(max-width: 740px)");
  const generalInformation = formData.generalInformation.values;
  const clientServerButton = formData.clientServerButton.values;
  const downloadableDocuments = formData.downloadableDocuments.values;
  const webReports = formData.webReports.values;
  const webOptions = formData.webOptions.values.find(
    (option) => option.isActive
  );
  const clientServerOptions = formData.clientServerOptions.values.find(
    (option) => option.isActive
  );
  const selectedClientServerOptions =
    formData.clientServerOptions.values.filter((value) => value.isActive);
  const selectedWebOption = formData.webOptions.values.filter(
    (option) => option.isActive
  );
  const clientServerReports = formData.clientServerReports.values.filter(
    (option) => option.isActive
  );
  return (
    <Stack gap={inube.spacing.s100} direction="column">
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
            attribute="Opción Web:"
            value={webOptions ? webOptions.value : ""}
          />
          <BoxAttribute
            attribute="Opción cliente servidor:"
            value={clientServerOptions ? clientServerOptions.value : ""}
          />
        </Grid>
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
            onClick={() => handleStepChange(2)}
            type="link"
          >
            Regresar a este paso
          </Button>
        </Stack>
      </Accordion>
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
            onClick={() => handleStepChange(3)}
            type="link"
          >
            Regresar a este paso
          </Button>
        </Stack>
      </Accordion>

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
              onClick={() => handleStepChange(4)}
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
                onClick={() => handleStepChange(5)}
                type="link"
              >
                Regresar a este paso
              </Button>
            </Stack>
          </Accordion>
        </>
        <>
          <Accordion
            key={"Reportes clientes servidor"}
            title={"Reportes clientes servidor"}
            defaultOpen={!isMobile}
          >
            <Grid
              templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              width="-webkit-fill-available"
              autoRows="auto"
              gap="s200"
            >
              <>
                {clientServerReports.map((option) => (
                  <BoxAttribute
                    key={option.id}
                    attribute={`Reportes clientes servidor:`}
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
                onClick={() => handleStepChange(6)}
                type="link"
              >
                Regresar a este paso
              </Button>
            </Stack>
          </Accordion>
        </>
        <>
          <Accordion
            key={"Opciones clientes servidor"}
            title={"Opciones clientes servidor"}
            defaultOpen={!isMobile}
          >
            <Grid
              templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
              width="-webkit-fill-available"
              autoRows="auto"
              gap="s200"
            >
              <>
                {selectedClientServerOptions.map((option) => (
                  <BoxAttribute
                    key={option.id}
                    attribute={`Opciones clientes servidor:`}
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
                onClick={() => handleStepChange(7)}
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
