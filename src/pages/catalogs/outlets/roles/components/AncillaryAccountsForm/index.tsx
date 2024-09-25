import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { AncillaryAccountsFormsUI } from "./interface";
import { IHandleChangeFormData } from "../../types";
import { generalMessage } from "../../config/messages.config";
export interface IAncillaryAccountsForm {
  id?: number;
  k_Rol?: number;
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

interface IAncillaryAccountsFormProps {
  initialValues: IAncillaryAccountsForm;
  k_Rol?: number;
  onHasChanges?: (hasChanges: boolean) => void;
  onSubmit?: (values: IAncillaryAccountsForm) => void;
  withSubmitButtons?: boolean;
  handleAddRoleFormValid?: (newValue: boolean) => void;
  onFormValueChange?: (values: IHandleChangeFormData) => void;
}

export const AncillaryAccountsForm = forwardRef(function AncillaryAccountsForm(
  props: IAncillaryAccountsFormProps,
  ref: React.Ref<FormikProps<IAncillaryAccountsForm>>
) {
  const {
    onHasChanges,
    initialValues,
    onFormValueChange,
    onSubmit,
    withSubmitButtons = false,
    handleAddRoleFormValid,
  } = props;

  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    validateOnBlur: false,
    onSubmit: onSubmit || (() => true),
  });

  const hasChanges = (valueCompare: IAncillaryAccountsForm) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  const handleChangeForm = (name: string, value: string) => {
    const formikValues = {
      ...formik.values,
      [name]: value,
    };

    if (onHasChanges) onHasChanges(hasChanges(formikValues));
    formik.setFieldValue(name, value).then(() => {
      formik.validateForm().then((errors) => {
        onFormValueChange && onFormValueChange(formikValues);
        setMessage({
          visible: true,
          data: generalMessage.success,
        });
      });
    });
  };

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (formik.values) {
      formik.validateForm();
    }
  }, [formik.values]);

  if (handleAddRoleFormValid) handleAddRoleFormValid(formik.isValid);

  return (
    <AncillaryAccountsFormsUI
      formik={formik}
      handleChangeForm={handleChangeForm}
      withSubmitButtons={withSubmitButtons}
      hasChanges={hasChanges}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
    />
  );
});
