import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle, useState } from "react";
import { AncillaryAccountsFormsUI } from "./interface";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";

const LOADING_TIMEOUT = 1500;

export interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

interface IAncillaryAccountsFormProps {
  initialValues: IAncillaryAccountsForm;
  onSubmit?: (values: IAncillaryAccountsForm) => void;
  withSubmitButtons?: boolean;
  handleSubmit?: () => void;
}

export const AncillaryAccountsForm = forwardRef(function AncillaryAccountsForm(
  props: IAncillaryAccountsFormProps,
  ref: React.Ref<FormikProps<IAncillaryAccountsForm>>
) {
  const {
    initialValues,
    onSubmit,
    withSubmitButtons = false,
    handleSubmit,
  } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit: onSubmit || (() => true),
  });

  const hasChanges = (valueCompare: IAncillaryAccountsForm) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleSubmitForm = () => {
    setIsLoading(true);
    const editedValues = {
      commercialSector: formik.values.commercialSector,
      officialSector: formik.values.officialSector,
      solidaritySector: formik.values.solidaritySector,
    };

    handleSubmit(editedValues);
    formik.initialValues = initialValues;
    formik.values = initialValues;

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

  return (
    <AncillaryAccountsFormsUI
      formik={formik}
      handleSubmitForm={handleSubmitForm}
      withSubmitButtons={withSubmitButtons}
      hasChanges={hasChanges}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      isLoading={isLoading}
    />
  );
});
