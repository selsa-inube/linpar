import { useState } from "react";
import { AidBudgetsFormUI } from "./interface";

function AidBudgetsForm(props) {
  const { currentAidBudgets, handleSubmit, withSubmitButtons } = props;
  const [aidBudgets, setAidBudgets] = useState(currentAidBudgets);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeAidBudgets = (aidBudgets) => {
    setAidBudgets(aidBudgets);
    if (!withSubmitButtons) handleSubmit(aidBudgets);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    handleSubmit(aidBudgets);
    setIsLoading(false);
  };

  const handleReset = () => {
    setAidBudgets(currentAidBudgets);
  };

  return (
    <AidBudgetsFormUI
      handleChangeAidBudgets={handleChangeAidBudgets}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentAidBudgets={currentAidBudgets}
      aidBudgets={aidBudgets}
      withSubmitButtons={withSubmitButtons}
    />
  );
}

export { AidBudgetsForm };
