import { useState } from "react";
import { BranchesFormUI } from "./interface";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

interface BranchesFormProps {
  currentBranches: IAssignmentFormEntry[];
  handleSubmit: (branches: IAssignmentFormEntry[]) => void;
  withSubmitButtons: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
}

function BranchesForm(props: BranchesFormProps) {
  const { currentBranches, handleSubmit, withSubmitButtons, onHasChanges } =
    props;
  const [branches, setBranches] =
    useState<IAssignmentFormEntry[]>(currentBranches);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "" as EMessageType,
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
    }, 1500);
  };

  const handleReset = () => {
    setBranches(currentBranches);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "" as EMessageType,
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
