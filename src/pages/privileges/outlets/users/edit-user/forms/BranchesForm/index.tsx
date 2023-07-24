import { useState } from "react";
import { BranchesFormUI } from "./interface";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

const LOADING_TIMEOUT = 1500;

interface BranchesFormProps {
  currentBranches: IAssignmentFormEntry[];
  handleSubmit: (branches: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
}

function BranchesForm(props: BranchesFormProps) {
  const { currentBranches, handleSubmit, withSubmitButtons, onHasChanges } =
    props;
  const [branches, setBranches] = useState(currentBranches);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]): boolean =>
    JSON.stringify(currentBranches) !== JSON.stringify(valueCompare);

  const handleChangeBranches = (branches: IAssignmentFormEntry[]) => {
    setBranches(branches);
    if (onHasChanges) onHasChanges(hasChanges(branches));
    if (!withSubmitButtons) handleSubmit(branches);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(branches);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setBranches(currentBranches);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <BranchesFormUI
      handleChangeBranches={handleChangeBranches}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      branches={branches}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { BranchesFormProps };
export { BranchesForm };
