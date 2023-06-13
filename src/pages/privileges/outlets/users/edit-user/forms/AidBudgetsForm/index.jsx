import { useState } from "react";
import { AidBudgetsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function AidBudgetsForm(props) {
  const { currentAidBudgetsUnits, handleSubmit, withSubmitButtons } = props;
  const [aidBudgetsUnits, setAidBudgetsUnits] = useState(
    currentAidBudgetsUnits
  );
  const [isLoading, setIsLoading] = useState(false);

  const handleChangeAidBudgets = (aidBudgetsUnits) => {
    setAidBudgetsUnits(aidBudgetsUnits);
    if (!withSubmitButtons) handleSubmit(aidBudgetsUnits);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(aidBudgetsUnits);
      setIsLoading(false);
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setAidBudgetsUnits(currentAidBudgetsUnits);
  };

  return (
    <AidBudgetsFormUI
      handleChangeAidBudgets={handleChangeAidBudgets}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentAidBudgetsUnits={currentAidBudgetsUnits}
      aidBudgetsUnits={aidBudgetsUnits}
      withSubmitButtons={withSubmitButtons}
    />
  );
}

export { AidBudgetsForm };
