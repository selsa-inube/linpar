import { useState } from "react";
import { AidBudgetsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function AidBudgetsForm(props) {
  const {
    currentAidBudgetUnits,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
  } = props;
  const [aidBudgetUnits, setAidBudgetUnits] = useState(currentAidBudgetUnits);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "",
  });

  const hasChanges = (valueCompare) =>
    JSON.stringify(currentAidBudgetUnits) !== JSON.stringify(valueCompare);

  const handleChangeAidBudgets = (aidBudgetUnits) => {
    onHasChanges(hasChanges(aidBudgetUnits));
    setAidBudgetUnits(aidBudgetUnits);
    if (!withSubmitButtons) handleSubmit(aidBudgetUnits);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(aidBudgetUnits);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: "success",
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setAidBudgetUnits(currentAidBudgetUnits);
    onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "",
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

export { AidBudgetsForm };
