import { useState } from "react";
import { PayrollsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function PayrollsForm(props) {
  const { currentPayrolls, handleSubmit, withSubmitButtons } = props;
  const [payrolls, setPayrolls] = useState(currentPayrolls);
  const [isLoading, setIsLoading] = useState(false);

  const handleChangePayrolls = (payrolls) => {
    setPayrolls(payrolls);
    if (!withSubmitButtons) handleSubmit(payrolls);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(payrolls);
      setIsLoading(false);
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setPayrolls(currentPayrolls);
  };

  return (
    <PayrollsFormUI
      handleChangePayrolls={handleChangePayrolls}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      currentPayrolls={currentPayrolls}
      payrolls={payrolls}
      withSubmitButtons={withSubmitButtons}
    />
  );
}

export { PayrollsForm };
