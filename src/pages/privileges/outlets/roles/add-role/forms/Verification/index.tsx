//import { MdArrowBack } from "react-icons/md";
import { Grid, Stack, useMediaQuery } from "@inube/design-system";
import { BoxAttribute } from "@src/components/data/BoxAttirbute";
import { Accordion } from "@src/components/data/Accordion";
import { IFormAddRole, IInitialiceFormRole } from "../../../types";

export interface IControllerAccordionProps {
  steps: IFormAddRole;
}

export const VerificationAddRole = (props: IControllerAccordionProps) => {
  const { steps } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  const dataVerificationStep = [steps].map((data) => ({
    sections: {
      generalInformation: {
        title: "Información general",
        attributes: [
          {
            attribute: "Nombre del rol",
            value: data.generalInformation.values.roleName,
          },
          {
            attribute: "Descripción",
            value: data.generalInformation.values.description,
          },
          {
            attribute: "Aplicación",
            value: data.generalInformation.values.aplication,
          },
        ],
      },
      ancillaryAccounts: {
        title: "Cuentas auxiliares",
        attributes: [
          {
            attribute: "Sector oficial",
            value: data.ancillaryAccounts.values.officialSector,
          },
          {
            attribute: "Sector comercial",
            value: data.ancillaryAccounts.values.commercialSector,
          },
          {
            attribute: "Sector solidario",
            value: data.ancillaryAccounts.values.solidaritySector,
          },
        ],
      },

      transactionTypes: {
        title: "Tipos de transacción",
        attributes: data.transactionTypes.values
          .filter(
            (transactionType: IInitialiceFormRole) =>
              transactionType.isActive === true
          )
          .map((transactionType: IInitialiceFormRole) => ({
            attribute: transactionType.value,
            value: transactionType.value,
          })),
      },
      businessRules: {
        title: "Reglas de negocio",
        attributes: data.businessRules.values
          .filter(
            (businessRule: { isActive: boolean }) =>
              businessRule.isActive === true
          )
          .map((businessRule: IInitialiceFormRole) => ({
            attribute: businessRule.value,
            value: businessRule.value,
          })),
      },
    },
  }));

  const filterOptionsEmpties = dataVerificationStep.map((step) =>
    Object.values(step.sections).map((section) =>
      section.attributes.filter((attribute) => attribute.value !== "")
    )
  );

  console.log(filterOptionsEmpties, "filterOptionsEmpties");

  const sections = dataVerificationStep.flatMap((step) =>
    Object.values(step.sections).map((section) => section.title)
  );

  const attributes = dataVerificationStep.flatMap((step) =>
    Object.values(step.sections).flatMap((attributes) => attributes.attributes)
  );

  /* const keySections = dataVerificationStep.flatMap((step) =>
    Object.keys(step.sections).filter(
      (section) =>
        section !== "generalInformation" && section !== "ancillaryAccounts"
    )
  );

  console.log(
    dataVerificationStep[0].sections.transactionTypes.attributes.length,
    "validar la data de la key"
  ); */

  return (
    <Stack gap="8px" direction="column">
      {sections.map((section) => (
        <Accordion key={section} title={section}>
          <Grid
            templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
            width="-webkit-fill-available"
            autoRows="auto"
            gap="s200"
          >
            {attributes.map((attribute) => (
              <BoxAttribute
                key={attribute.attribute}
                attribute={attribute.attribute}
                value={attribute.value}
              />
            ))}
          </Grid>
        </Accordion>
      ))}
    </Stack>
  );
};
