import { useState } from "react";
import { SuccessFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface SuccessTokensFormProps {
  textConfig: any;
  handleSubmit: (successTokens: IAssignmentFormEntry[]) => void;
  palette: typeof inube;
  onChange: (event: any) => void;
  onHasChanges?: (hasChanges: boolean) => void;
}

function SuccessForm(props: SuccessTokensFormProps) {
  const { textConfig, handleSubmit, palette, onChange, onHasChanges } = props;
  const [successTokens, setSuccessTokens] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangeSuccessTokens = (successTokens: IAssignmentFormEntry[]) => {
    setSuccessTokens(successTokens);
    if (onHasChanges) onHasChanges(hasChanges(successTokens));
    handleSubmit(successTokens);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(successTokens);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setSuccessTokens(textConfig);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <SuccessFormUI
      handleChangeSuccessTokens={onChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      palette={palette}
      isLoading={isLoading}
      textConfig={textConfig}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { SuccessTokensFormProps };
export { SuccessForm };
