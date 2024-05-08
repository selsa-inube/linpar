import { useMediaQuery } from "@inube/design-system";
import { VerificationAddPositionUI } from "./interface";
import { IAttributes, IDataVerificationStep } from "./types";
import { IFormsInvitation, IOptionInitialiceEntry } from "../types/forms.types";

export interface IControllerAccordionProps {
  steps: IFormsInvitation;
  setCurrentStep: (step: number) => void;
}

function createAttribute(
  attributeName: string,
  attributeValue: string
): IAttributes {
  return { attribute: attributeName, value: attributeValue };
}

function filterAndMapData(
  data: IOptionInitialiceEntry[] | [],
  isActiveKey: string
): IAttributes[] {
  return data
    .filter(
      (item: IOptionInitialiceEntry) =>
        item[isActiveKey as string as keyof IOptionInitialiceEntry] === true
    )
    .map((item: IOptionInitialiceEntry) =>
      createAttribute(item.value, item.value)
    );
}
export const VerificationAddPosition = (props: IControllerAccordionProps) => {
  const { steps, setCurrentStep } = props;

  const isMobile = useMediaQuery("(max-width: 740px)");

  const dataVerificationStep: IDataVerificationStep[] = [steps].map((data) => ({
    sections: {
      generalInformation: {
        title: "Información general",
        attributes: [
          createAttribute(
            "Nombre:",
            data.generalInformation.entries?.username ?? ""
          ),
          createAttribute(
            "Identificación:",
            data.generalInformation.entries?.userID ?? ""
          ),
          createAttribute(
            "Correo:",
            data.generalInformation.entries?.email ?? ""
          ),
          createAttribute(
            "Número de teléfono:",
            data.generalInformation.entries?.phone ?? ""
          ),
          createAttribute(
            "Cargo:",
            data.generalInformation.entries?.cargo ?? ""
          ),
        ],
      },
      branches: {
        title: "Sucursales:",
        attributes: filterAndMapData(data.branches?.entries || [], "isActive"),
      },
      projects: {
        title: "Proyectos:",
        attributes: filterAndMapData(data.projects?.entries || [], "isActive"),
      },
      events: {
        title: "Eventos:",
        attributes: filterAndMapData(data.events?.entries || [], "isActive"),
      },
      aidBudgetUnits: {
        title: "Unidades de ayuda:",
        attributes: filterAndMapData(
          data.aidBudgetUnits?.entries || [],
          "isActive"
        ),
      },
      payrolls: {
        title: "Nómina:",
        attributes: filterAndMapData(data.payrolls?.entries || [], "isActive"),
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
