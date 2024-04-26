import { useMediaQuery } from "@inube/design-system";
import { VerificationAddPositionUI } from "./interface";
import { IAttributes, IDataVerificationStep } from "./types";
import { IFormAddPosition, IOptionInitialiceEntry } from "../../types";

export interface IControllerAccordionProps {
  steps: IFormAddPosition;
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
            "Nombre del cargo",
            data.generalInformation.values.n_Grupo
          ),
          createAttribute("Descripción", data.generalInformation.values.n_Uso),
        ],
      },
      roles: {
        title: "Roles",
        attributes: filterAndMapData(data.roles?.values || [], "isActive"),
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
