import { useState } from "react";
import { InitializerFormUI } from "./interface";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "../../../types/forms.types";
import { EMessageType } from "@src/types/messages.types";

const LOADING_TIMEOUT = 1500;

interface IInitializerForm {
  dataOptionsForms: IAssignmentFormEntry[];
  handleSubmit: (aidBudgetUnits: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}
export function InitializerForm(props: IInitializerForm) {
  const {
    dataOptionsForms,
    handleSubmit,
    withSubmitButtons = false,
    onHasChanges,
    readOnly = false,
  } = props;
  const [formDataOptions, setFormDataOptions] = useState(dataOptionsForms);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(dataOptionsForms) !== JSON.stringify(valueCompare);

  const handleChangeAidBudgets = (aidBudgetUnits: IAssignmentFormEntry[]) => {
    setFormDataOptions(aidBudgetUnits);
    if (onHasChanges) onHasChanges(hasChanges(aidBudgetUnits));
    if (!withSubmitButtons) handleSubmit(aidBudgetUnits);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(formDataOptions);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setFormDataOptions(dataOptionsForms);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <InitializerFormUI
      handleChangeInitializerForm={handleChangeAidBudgets}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      dataOptionsForms={formDataOptions}
      withSubmitButtons={withSubmitButtons}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
    />
  );
}

export type { IInitializerForm };
