import { useState } from "react";
import { WarningFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface WarningTokensFormProps {
  textConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
  handleSubmit: (warningText: IAssignmentFormEntry[]) => void;
  onHasChanges?: (hasChanges: boolean) => void;
}

function WarningForm(props: WarningTokensFormProps) {
  const { textConfig, palette, handleSubmit, onChange, onHasChanges } = props;
  const [warningText, setWarningText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangeWarningTokens = (warningText: IAssignmentFormEntry[]) => {
    setWarningText(warningText);
    if (onHasChanges) onHasChanges(hasChanges(warningText));
    handleSubmit(warningText);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(warningText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setWarningText(textConfig);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <WarningFormUI
      handleSubmitForm={handleSubmitForm}
      handleChangeWarningTokens={onChange}
      handleReset={handleReset}
      isLoading={isLoading}
      textConfig={textConfig}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      palette={undefined}
    />
  );
}

export type { WarningTokensFormProps };
export { WarningForm };
