import { useState } from "react";
import { PayrollsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

function PayrollsForm(props) {
  const { currentPayrolls, handleSubmit, withSubmitButtons, onHasChanges } =
    props;
  const [payrolls, setPayrolls] = useState(currentPayrolls);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "",
  });

  const hasChanges = (valueCompare) =>
    JSON.stringify(currentPayrolls) !== JSON.stringify(valueCompare);

  const handleChangePayrolls = (payrolls) => {
    setPayrolls(payrolls);
    if (onHasChanges) onHasChanges(hasChanges(payrolls));
    if (!withSubmitButtons) handleSubmit(payrolls);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(payrolls);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: "success",
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setPayrolls(currentPayrolls);
    onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "",
    });
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
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export { PayrollsForm };
