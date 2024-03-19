import { useState } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { AncillaryAccountsFormsUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

export interface IAncillaryAccountsFormProps {
  handleSubmit: (values: IAncillaryAccountsForm) => void;
  valuesData: IAncillaryAccountsForm;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
  withSubmitButtons?: boolean;
}

export function AncillaryAccountsForm(props: IAncillaryAccountsFormProps) {
  const {
    withSubmitButtons,
    valuesData,
    handleSubmit,
    onHasChanges,
    readOnly,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });

  const formik = useFormik({
    initialValues: { ...valuesData },
    validateOnChange: false,

    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setShowMessage({
          visible: true,
          type: EMessageType.SUCCESS,
        });
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmitForm = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage({
          visible: true,
          type: EMessageType.FAILED,
        });
      }
      formik.handleSubmit();
    });
  };

  const hasChanges = (valueCompare: IAncillaryAccountsForm) =>
    JSON.stringify(valuesData) !== JSON.stringify(valueCompare);

  const handleChangeForm = (name: string, value: string) => {
    console.log("name", name, "value", value, "cambio de funcion");
    const formikValues = {
      ...formik.values,
      [name]: value,
    };

    if (onHasChanges) onHasChanges(hasChanges(formikValues));
    formik.setFieldValue(name, value).then(() => {
      if (withSubmitButtons) return;
      formik.validateForm().then((errors) => {
        if (!errors || Object.keys(errors).length === 0) {
          handleSubmit(formikValues);
        }
      });
    });
  };

  const handleCloseSectionMessage = () => {
    setShowMessage({
      visible: false,
    });
  };

  return (
    <AncillaryAccountsFormsUI
      loading={loading}
      formik={formik}
      showMessage={showMessage}
      withSubmitButtons={withSubmitButtons}
      handleCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      formInvalid={formik.isValidating || formik.isValid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={handleChangeForm}
      readOnly={readOnly}
    />
  );
}
