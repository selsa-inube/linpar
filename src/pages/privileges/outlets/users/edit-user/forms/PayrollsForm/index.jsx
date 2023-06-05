import { useState } from "react";
import { PayrollsFormUI } from "./interface";

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
    handleSubmit(payrolls);
    setIsLoading(false);
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
