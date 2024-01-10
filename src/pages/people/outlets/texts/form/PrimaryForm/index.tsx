import { useState } from "react";
import { PrimaryFormUI } from "./interface";

import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";
import { textFormsConfig } from "../../config/text.config";

const LOADING_TIMEOUT = 1500;

interface PrimaryFormProps {
  textConfig: any;
  handleSubmit: (textConfig: any) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function PrimaryForm(props: PrimaryFormProps) {
  const {
    textConfig,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
    readOnly,
  } = props;
  const [primaryText, setPrimaryText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: any) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangePrimaryTokens = (textConfig: any) => {
    setPrimaryText(textConfig);
    if (onHasChanges) onHasChanges(hasChanges(textConfig));
    if (!withSubmitButtons) handleSubmit(textConfig);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(primaryText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setPrimaryText(textConfig);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <PrimaryFormUI
      handleChangePrimaryTokens={handleChangePrimaryTokens}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      textConfig={textConfig}
      withSubmitButtons
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
    />
  );
}

export type { PrimaryFormProps };
export { PrimaryForm };
