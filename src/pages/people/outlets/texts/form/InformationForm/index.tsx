import { useState } from "react";
import { InformationFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface InformationFormProps {
  textConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
  handleSubmit: any;
  onHasChanges?: (hasChanges: boolean) => void;
}

function InformationForm(props: InformationFormProps) {
  const { textConfig, handleSubmit, palette, onHasChanges, onChange } = props;
  const [infoText, setInfoText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangeInformation = (aidBudgetUnits: IAssignmentFormEntry[]) => {
    setInfoText(aidBudgetUnits);
    if (onHasChanges) onHasChanges(hasChanges(aidBudgetUnits));
    handleSubmit(aidBudgetUnits);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(infoText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setInfoText(textConfig);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <InformationFormUI
      handleChangeInformation={onChange}
      handleSubmitForm={handleSubmitForm}
      palette={palette}
      handleReset={handleReset}
      isLoading={isLoading}
      textConfig={textConfig}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { InformationFormProps };
export { InformationForm };
