import { useState } from "react";

import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";

import { InitializerFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

interface IInitializerForm {
  dataOptionsForms: IAssignmentFormEntry[];
  handleSubmit: (renderForm: IAssignmentFormEntry[]) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}
export function InitializerForm(props: IInitializerForm) {
  const {
    dataOptionsForms: initialDataOptionsForms,
    handleSubmit,
    withSubmitButtons = false,
    onHasChanges,
    readOnly = false,
  } = props;
  const [formDataOptions, setFormDataOptions] = useState(
    initialDataOptionsForms
  );
  const [initialFormDataOptions] = useState(initialDataOptionsForms);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(initialDataOptionsForms) !== JSON.stringify(valueCompare);

  const handleChangeRenderForm = (renderForm: IAssignmentFormEntry[]) => {
    setFormDataOptions(renderForm);
    if (onHasChanges) onHasChanges(hasChanges(renderForm));
    if (!withSubmitButtons) handleSubmit(renderForm);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    setTimeout(() => {
      handleSubmit(formDataOptions);
      setIsLoading(false);
      setMessage({
        visible: true,
        data: generalMessage.success,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setFormDataOptions(initialFormDataOptions);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <InitializerFormUI
      handleChangeInitializerForm={handleChangeRenderForm}
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
