import { EMessageType } from "@src/types/messages.types";
import { useState } from "react";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { PayrollsFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;
interface PayrollsFormProps {
  currentPayrolls: IAssignmentFormEntry[];
  handleSubmit: (payrolls: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function PayrollsForm(props: PayrollsFormProps) {
  const {
    currentPayrolls,
    handleSubmit,
    withSubmitButtons,
    onHasChanges,
    readOnly,
  } = props;
  const [payrolls, setPayrolls] = useState(currentPayrolls);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
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
      readOnly={readOnly}
    />
  );
}

export { PayrollsForm };
export type { PayrollsFormProps };
