import { useMediaQuery } from "@inube/design-system";

import { IInitialiceFormRole } from "@pages/privileges/outlets/roles/types";

import { VerificationAddRoleUI } from "./interface";
import { IFormAddLinixUseCase } from "../../adding-linix-use-case/types";

export interface IControllerAccordionProps {
  steps: IFormAddLinixUseCase;
  setCurrentStep: (step: number) => void;
}

interface IAttributes {
  attribute: string;
  value: string;
}

interface IOptionsSections {
  title: string;
  attributes: IAttributes[];
}

interface ISections {
  [key: string]: IOptionsSections;
}

export interface IDataVerificationStep {
  sections: ISections;
}

function createAttribute(
  attributeName: string,
  attributeValue: string
): IAttributes {
  return { attribute: attributeName, value: attributeValue };
}

function filterAndMapData(
  data: IInitialiceFormRole[] | [],
  isActiveKey: string
): IAttributes[] {
  return data
    .filter(
      (item: IInitialiceFormRole) =>
        item[isActiveKey as string as keyof IInitialiceFormRole] === true
    )
    .map((item: IInitialiceFormRole) =>
      createAttribute(item.id + ": ", item.value)
    );
}

export const VerificationAddLinixUseCase = (
  props: IControllerAccordionProps
) => {
  const { steps, setCurrentStep } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  const dataVerificationStep: IDataVerificationStep[] = [steps].map((data) => ({
    sections: {
      generalInformation: {
        title: "Información general",
        attributes: [
          createAttribute(
            "Nombre del caso de uso:",
            data.generalInformation.values.n_Usecase
          ),
          createAttribute(
            "Descripción: ",
            data.generalInformation.values.n_Descrip
          ),
          createAttribute(
            "Tipo de caso de uso: ",
            data.generalInformation.values.i_Tipusec
          ),
          createAttribute(
            "Opción Web:",
            data.generalInformation.values.k_Funcio
          ),
          createAttribute(
            "Opción Cliente Servidor:",
            data.generalInformation.values.k_Opcion
          ),
        ],
      },
      ancillaryAccounts: {
        title: "Opción menú cliente-servidor linix",
        attributes: [
          createAttribute(
            "Opción menú cliente-servidor linix: ",
            data.clientServerButton.values.csButtonOption
          ),
        ],
      },
      downloadableDocuments: {
        title: "Formatos descargables",
        attributes: filterAndMapData(
          data.downloadableDocuments?.values || [],
          "isActive"
        ),
      },
      webReports: {
        title: "Reportes Web",
        attributes: filterAndMapData(data.webReports?.values || [], "isActive"),
      },
      webOptions: {
        title: "Opciones Web",
        attributes: filterAndMapData(data.webOptions?.values || [], "isActive"),
      },
      clientServerReports: {
        title: "Reportes cliente servidor",
        attributes: filterAndMapData(
          data.clientServerReports?.values || [],
          "isActive"
        ),
      },
      clientServerOptions: {
        title: "Opciones cliente servidor",
        attributes: filterAndMapData(
          data.clientServerOptions?.values || [],
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
      setCurrentStep={setCurrentStep}
    />
  );
};
