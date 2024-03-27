import { useMediaQuery } from "@inube/design-system";

import { IFormAddRole, IInitialiceFormRole } from "../../../types";
import { VerificationAddRoleUI } from "./interface";

export interface IControllerAccordionProps {
  steps: IFormAddRole;
}

interface Sections {
  [key: string]: {
    title: string;
    attributes: { attribute: string; value: string }[];
  };
}

export interface DataVerificationStep {
  sections: Sections;
}

function createAttribute(
  attributeName: string,
  attributeValue: string
): { attribute: string; value: string } {
  return { attribute: attributeName, value: attributeValue };
}

function filterAndMapData(
  data: IInitialiceFormRole[] | [],
  isActiveKey: string
): { attribute: string; value: string }[] {
  return data
    .filter(
      (item: IInitialiceFormRole) =>
        item[isActiveKey as string as keyof IInitialiceFormRole] === true
    )
    .map((item: IInitialiceFormRole) =>
      createAttribute(item.value, item.value)
    );
}

export const VerificationAddRole = (props: IControllerAccordionProps) => {
  const { steps } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  const dataVerificationStep: DataVerificationStep[] = [steps].map((data) => ({
    sections: {
      generalInformation: {
        title: "Información general",
        attributes: [
          createAttribute(
            "Nombre del rol",
            data.generalInformation.values.roleName
          ),
          createAttribute(
            "Descripción",
            data.generalInformation.values.description
          ),
          createAttribute(
            "Aplicación",
            data.generalInformation.values.aplication
          ),
        ],
      },
      ancillaryAccounts: {
        title: "Cuentas auxiliares",
        attributes: [
          createAttribute(
            "Sector oficial",
            data.ancillaryAccounts.values.officialSector
          ),
          createAttribute(
            "Sector comercial",
            data.ancillaryAccounts.values.commercialSector
          ),
          createAttribute(
            "Sector solidario",
            data.ancillaryAccounts.values.solidaritySector
          ),
        ],
      },
      transactionTypes: {
        title: "Tipos de transacción",
        attributes: filterAndMapData(
          data.transactionTypes?.values || [],
          "isActive"
        ),
      },
      businessRules: {
        title: "Reglas de negocio",
        attributes: filterAndMapData(
          data.businessRules?.values || [],
          "isActive"
        ),
      },
    },
  }));

  const keySections = dataVerificationStep.flatMap((step) =>
    Object.keys(step.sections)
  );

  return (
    <VerificationAddRoleUI
      dataVerificationStep={dataVerificationStep}
      keySections={keySections}
      isMobile={isMobile}
    />
  );
};
