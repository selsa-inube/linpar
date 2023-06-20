import { useState } from "react";
import { BranchesFormUI } from "./interface";

function BranchesForm(props) {
  const { currentBranches, handleSubmit, withSubmitButtons } = props;
  const [branches, setBranches] = useState(currentBranches);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "",
  });

  const handleChangeBranches = (branches) => {
    setBranches(branches);
    if (!withSubmitButtons) handleSubmit(branches);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(branches);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: "success",
      });
    }, 1500);
  };

  const handleReset = () => {
    setBranches(currentBranches);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "",
    });
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
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
    />
  );
}

export { BranchesForm };
