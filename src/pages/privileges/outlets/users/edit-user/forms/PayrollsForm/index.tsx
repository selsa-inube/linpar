import { useState } from "react";
import { PayrollsFormUI } from "./interface";
import { IAssignmentFormEntry } from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

const LOADING_TIMEOUT = 1500;

interface PayrollsFormProps {
  currentPayrolls: IAssignmentFormEntry[];
  handleSubmit: (payrolls: IAssignmentFormEntry[]) => void;
  withSubmitButtons: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
}

function PayrollsForm(props: PayrollsFormProps) {
  const { currentPayrolls, handleSubmit, withSubmitButtons, onHasChanges } =
    props;
  const [payrolls, setPayrolls] =
    useState<IAssignmentFormEntry[]>(currentPayrolls);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState({
    visible: false,
    type: "" as EMessageType,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(currentPayrolls) !== JSON.stringify(valueCompare);

  const handleChangePayrolls = (payrolls: IAssignmentFormEntry[]) => {
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
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setPayrolls(currentPayrolls);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
      type: "" as EMessageType,
    });
  };

  return (
    <PayrollsFormUI
      handleChangePayrolls={handleChangePayrolls}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      payrolls={payrolls}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { PayrollsFormProps };
export { PayrollsForm };
