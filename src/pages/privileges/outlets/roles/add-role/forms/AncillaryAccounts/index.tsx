import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

import { forwardRef, useImperativeHandle, useState, useEffect } from "react";
import { AncillaryAccountsFormsUI } from "./interface";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";
import { validationMessages } from "@src/validations/validationMessages";

const LOADING_TIMEOUT = 1500;

const validationSchema = Yup.object({
  officialSector: Yup.string().required(validationMessages.required),
  commercialSector: Yup.string().required(validationMessages.required),
  solidaritySector: Yup.string().required(validationMessages.required),
});

export interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

interface IAncillaryAccountsFormProps {
  initialValues: IAncillaryAccountsForm;
  onSubmit?: (values: IAncillaryAccountsForm) => void;
  withSubmitButtons?: boolean;
  handleAddRoleFormValid: (newValue: boolean) => void;
}

export const AncillaryAccountsForm = forwardRef(function AncillaryAccountsForm(
  props: IAncillaryAccountsFormProps,
  ref: React.Ref<FormikProps<IAncillaryAccountsForm>>
) {
  const {
    initialValues,
    onSubmit,
    withSubmitButtons = false,
    handleAddRoleFormValid,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
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

  const hasChanges = (valueCompare: IAncillaryAccountsForm) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setMessage({
        visible: true,
        data: generalMessage.success,
      });
      setIsLoading(false);
    }, LOADING_TIMEOUT);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
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
      handleSubmit={handleSubmit}
      withSubmitButtons={withSubmitButtons}
      hasChanges={hasChanges}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      isLoading={isLoading}
    />
  );
});
