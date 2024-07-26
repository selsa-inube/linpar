import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { validationMessages } from "@src/validations/validationMessages";

import { GeneralInformationFormUI } from "./interface";
import { IGeneralInformationForm, IHandleChangeFormData } from "../../types";
import { generalMessage } from "../../config/messages.config";

const validationSchema = Yup.object({
  n_Rol: Yup.string().required(validationMessages.required),
  description: Yup.string().required(validationMessages.required),
  applicationId: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  linixRoles: Record<string, unknown>[];
  initialValues: IGeneralInformationForm;
  k_Rol?: number;
  onSubmit?: (values: IGeneralInformationForm) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  handleAddRoleFormValid?: (newValue: boolean) => void;
  currentStep?: number;
  onFormValueChange?: (values: IHandleChangeFormData) => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationForm>>
  ) {
    const {
      initialValues,
      onFormValueChange,
      onHasChanges,
      onSubmit,
      withSubmitButtons = false,
      linixRoles,
      handleAddRoleFormValid,
    } = props;

    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnChange: true,
      validateOnBlur: true,
      onSubmit: onSubmit || (() => true),
    });

    useImperativeHandle(ref, () => formik);

    const hasChanges = (valueCompare: IGeneralInformationForm) =>
      JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

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

    const handleCloseSectionMessage = () => {
      setMessage({
        visible: false,
      });
    };

    useEffect(() => {
      if (formik.values) {
        formik.validateForm();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values]);

    if (handleAddRoleFormValid) handleAddRoleFormValid(formik.isValid);

    return (
      <>
        <GeneralInformationFormUI
          formik={formik}
          handleChangeForm={handleChangeForm}
          linixRoles={linixRoles}
          withSubmitButtons={withSubmitButtons}
          hasChanges={hasChanges}
          message={message}
          onCloseSectionMessage={handleCloseSectionMessage}
        />
      </>
    );
  }
);
