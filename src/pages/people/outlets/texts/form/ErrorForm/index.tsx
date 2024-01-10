import { useState } from "react";
import { ErrorFormUI } from "./interface";

import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface AidBudgetsFormProps {
  textConfig: any;
  handleSubmit: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function ErrorForm(props: AidBudgetsFormProps) {
  const {
    textConfig,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
    readOnly,
  } = props;
  const [errorText, setErrorText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangeAidBudgets = (aidBudgetUnits: IAssignmentFormEntry[]) => {
    setErrorText(errorText);
    if (onHasChanges) onHasChanges(hasChanges(aidBudgetUnits));
    if (!withSubmitButtons) handleSubmit(aidBudgetUnits);
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
      handleChangeAidBudgets={handleChangeAidBudgets}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
    />
  );
}

export type { AidBudgetsFormProps };
export { ErrorForm };
