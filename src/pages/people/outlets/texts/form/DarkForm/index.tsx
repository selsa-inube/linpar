import { useState } from "react";
import { DarkFormUI } from "./interface";

import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface DarkFormProps {
  currentAidBudgetUnits: IAssignmentFormEntry[];
  handleSubmit: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function DarkForm(props: DarkFormProps) {
  const {
    currentAidBudgetUnits,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
    readOnly,
  } = props;
  const [aidBudgetUnits, setAidBudgetUnits] = useState(currentAidBudgetUnits);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(currentAidBudgetUnits) !== JSON.stringify(valueCompare);

  const handleChangeDark = (aidBudgetUnits: IAssignmentFormEntry[]) => {
    setAidBudgetUnits(aidBudgetUnits);
    if (onHasChanges) onHasChanges(hasChanges(aidBudgetUnits));
    if (!withSubmitButtons) handleSubmit(aidBudgetUnits);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(aidBudgetUnits);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setAidBudgetUnits(currentAidBudgetUnits);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <DarkFormUI
      handleChangeDark={handleChangeDark}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      aidBudgetUnits={aidBudgetUnits}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
    />
  );
}

export type { DarkFormProps };
export { DarkForm };
