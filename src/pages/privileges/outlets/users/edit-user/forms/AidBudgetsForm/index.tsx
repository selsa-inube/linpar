import { useState } from "react";
import { AidBudgetsFormUI } from "./interface";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

const LOADING_TIMEOUT = 1500;

interface AidBudgetsFormProps {
  currentAidBudgetUnits: IAssignmentFormEntry[];
  handleSubmit: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
}

function AidBudgetsForm(props: AidBudgetsFormProps) {
  const {
    currentAidBudgetUnits,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
  } = props;
  const [aidBudgetUnits, setAidBudgetUnits] = useState(currentAidBudgetUnits);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(currentAidBudgetUnits) !== JSON.stringify(valueCompare);

  const handleChangeAidBudgets = (aidBudgetUnits: IAssignmentFormEntry[]) => {
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
    <AidBudgetsFormUI
      handleChangeAidBudgets={handleChangeAidBudgets}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      aidBudgetUnits={aidBudgetUnits}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { AidBudgetsFormProps };
export { AidBudgetsForm };
