import { useMediaQuery } from "@inubekit/hooks";

import { VerificationAddPositionUI } from "./interface";
import { IAttributes, IDataVerificationStep } from "./types";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { IFormCompleteInvitation } from "../Complete-invitation/types";

export interface IControllerAccordionProps {
  steps: IFormCompleteInvitation;
  setCurrentStep: (step: number) => void;
}

function createAttribute(
  attributeName: string,
  attributeValue: string
): IAttributes {
  return { attribute: attributeName, value: attributeValue };
}

function filterAndMapData(
  data: IAssignmentFormEntry[] | [],
  isActiveKey: string
): IAttributes[] {
  return data
    .filter(
      (item: IAssignmentFormEntry) =>
        item[isActiveKey as string as keyof IAssignmentFormEntry] === true
    )
    .map((item: IAssignmentFormEntry) =>
      createAttribute(item.value, item.value)
    );
}
export const VerificationAddInvitation = (props: IControllerAccordionProps) => {
  const { steps, setCurrentStep } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  const dataVerificationStep: IDataVerificationStep[] = [steps].map((data) => ({
    sections: {
      generalInformation: {
        title: "Información general",
        attributes: [
          createAttribute(
            "Nombre:",
            data.generalInformation.values?.userName ?? ""
          ),
          createAttribute(
            "Identificación:",
            data.generalInformation.values?.userIdentification ?? ""
          ),
          createAttribute(
            "Correo:",
            data.generalInformation.values?.email ?? ""
          ),
          createAttribute(
            "Número de teléfono:",
            data.generalInformation.values?.phoneNumber ?? ""
          ),
          createAttribute(
            "Cargo:",
            data.generalInformation.values?.position ?? ""
          ),
        ],
      },
      branches: {
        title: "Sucursales:",
        attributes: filterAndMapData(data.branches?.values || [], "isActive"),
      },
      projects: {
        title: "Proyectos:",
        attributes: filterAndMapData(data.projects?.values || [], "isActive"),
      },
      events: {
        title: "Eventos:",
        attributes: filterAndMapData(data.events?.values || [], "isActive"),
      },
      aidBudgetUnits: {
        title: "Unidades de ayuda:",
        attributes: filterAndMapData(
          data.aidBudgetUnits?.values || [],
          "isActive"
        ),
      },
      payrolls: {
        title: "Nómina:",
        attributes: filterAndMapData(data.payrolls?.values || [], "isActive"),
      },
    },
  }));

  const keySections = dataVerificationStep.flatMap((step) =>
    Object.keys(step.sections)
  );
  return (
    <VerificationAddPositionUI
      dataVerificationStep={dataVerificationStep}
      keySections={keySections}
      isMobile={isMobile}
      setCurrentStep={setCurrentStep}
    />
  );
};
