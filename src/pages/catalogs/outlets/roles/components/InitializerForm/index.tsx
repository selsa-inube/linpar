import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  IAssignmentFormEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";

import { InitializerFormUI } from "./interface";
import { IRol } from "../../types";

interface IInitializerForm {
  dataOptionsForms: IAssignmentFormEntry[];
  onFormValueChange: (renderForm: IAssignmentFormEntry[]) => void;
  id?: string;
  keyData?: string;
  nameDB?: string;
  property?: string;
  propertyData?: string;
  readOnly?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  setChangedData?: (changeData: IAssignmentFormEntry[]) => void;
  changeData?: IAssignmentFormEntry[];
  nameOption?: string;
  formData?: IRol;
}

export function InitializerForm(props: IInitializerForm) {
  const {
    dataOptionsForms: initialDataOptionsForms,
    onFormValueChange,
    onHasChanges,
    readOnly = false,
    setChangedData = () => {},
    changeData = [],
  } = props;
  const [formDataOptions, setFormDataOptions] = useState(
    initialDataOptionsForms
  );
  const [initialFormDataOptions] = useState(initialDataOptionsForms);
  const [isLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(initialDataOptionsForms) !== JSON.stringify(valueCompare);

  const handleChangeRenderForm = (renderForm: IAssignmentFormEntry[]) => {
    setFormDataOptions(renderForm);
    if (onHasChanges) onHasChanges(hasChanges(renderForm));
    onFormValueChange(renderForm);
  };

  const navigate = useNavigate();

  const handleReset = () => {
    setFormDataOptions(initialFormDataOptions);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });

    navigate("/catalogs/linixUseCase");
  };

  return (
    <InitializerFormUI
      handleChangeInitializerForm={handleChangeRenderForm}
      handleSubmitForm={() => {}}
      handleReset={handleReset}
      isLoading={isLoading}
      dataOptionsForms={formDataOptions}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      readOnly={readOnly}
      setChangedData={setChangedData}
      changeData={changeData}
    />
  );
}

export type { IInitializerForm };
