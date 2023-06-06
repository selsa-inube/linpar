import { useState } from "react";
import { BranchesFormUI } from "./interface";

function BranchesForm(props) {
  const { currentBranches, handleSubmit, withSubmitButtons } = props;
  const [branches, setBranches] = useState(currentBranches);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeBranches = (branches) => {
    setBranches(branches);
    if (!withSubmitButtons) handleSubmit(branches);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    // If this function is async, the form will be submitted before the state is updated
    handleSubmit(branches);
    setTimeout(() => {
      setIsLoading(false);
    }, 1500);
  };

  const handleReset = () => {
    setBranches(currentBranches);
  };

  return (
    <BranchesFormUI
      handleChangeBranches={handleChangeBranches}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentBranches={currentBranches}
      branches={branches}
      withSubmitButtons={withSubmitButtons}
    />
  );
}

export { BranchesForm };
