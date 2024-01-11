import { useState } from "react";
import { ErrorFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface ErrorTokensFormProps {
  textConfig: any;
  palette: typeof inube;
  handleSubmit: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function ErrorForm(props: ErrorTokensFormProps) {
  const { textConfig, palette, handleSubmit, onHasChanges, readOnly } = props;
  const [errorText, setErrorText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangeErrorTokens = (key: string, tokenName: string) => {
    setErrorText((prevNames: any) => ({ ...prevNames, [key]: tokenName }));
  };
  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(errorText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setErrorText(errorText);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <ErrorFormUI
      textConfig={textConfig}
      handleChangeErrorTokens={handleChangeErrorTokens}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      palette={palette}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { ErrorTokensFormProps };
export { ErrorForm };
