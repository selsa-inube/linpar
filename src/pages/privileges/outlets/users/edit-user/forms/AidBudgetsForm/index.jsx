import { useState } from "react";
import { AidBudgetsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function AidBudgetsForm(props) {
  const { currentAidBudgetUnits, handleSubmit, withSubmitButtons } = props;
  const [aidBudgetUnits, setAidBudgetUnits] = useState(currentAidBudgetUnits);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeAidBudgets = (aidBudgetUnits) => {
    setAidBudgetUnits(aidBudgetUnits);
    if (!withSubmitButtons) handleSubmit(aidBudgetUnits);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(aidBudgetUnits);
      setIsLoading(false);
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setAidBudgetUnits(currentAidBudgetUnits);
  };

  return (
    <AidBudgetsFormUI
      handleChangeAidBudgets={handleChangeAidBudgets}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentAidBudgetUnits={currentAidBudgetUnits}
      aidBudgetUnits={aidBudgetUnits}
      withSubmitButtons={withSubmitButtons}
    />
  );
}

export { AidBudgetsForm };
