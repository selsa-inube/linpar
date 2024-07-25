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
  handleSubmit?: (values: IHandleChangeFormData) => void;
}

export const AncillaryAccountsForm = forwardRef(function AncillaryAccountsForm(
  props: IAncillaryAccountsFormProps,
  ref: React.Ref<FormikProps<IAncillaryAccountsForm>>
) {
  const {
    onHasChanges,
    initialValues,
    handleSubmit,
    onSubmit,
    withSubmitButtons = false,
    handleAddRoleFormValid,
  } = props;
  const [isLoading] = useState(false);
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
        handleSubmit && handleSubmit(formikValues);
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  if (handleAddRoleFormValid) handleAddRoleFormValid(formik.isValid);

  return (
    <AncillaryAccountsFormsUI
      formik={formik}
      handleChangeForm={handleChangeForm}
      // handleSubmit={handleSubmit}
      withSubmitButtons={withSubmitButtons}
      hasChanges={hasChanges}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      isLoading={isLoading}
    />
  );
});
