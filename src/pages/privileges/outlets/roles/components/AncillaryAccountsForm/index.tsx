import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle, useState, useEffect } from "react";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { AncillaryAccountsFormsUI } from "./interface";
export interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

interface IAncillaryAccountsFormProps {
  initialValues: IAncillaryAccountsForm;
  k_Rol?: number;
  onSubmit?: (values: IAncillaryAccountsForm) => void;
  withSubmitButtons?: boolean;
  handleAddRoleFormValid?: (newValue: boolean) => void;
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

  // const handleSubmit = async () => {
  //   setIsLoading(true);

  //   const editedAccounts = Object.entries(formik.values).map(
  //     ([key, value]) => ({
  //       i_Tipent: key,
  //       k_Codcta: value,
  //     })
  //   );

  //   await updateItemData({
  //     key: "k_Rol",
  //     nameDB: "linix-roles",
  //     identifier: k_Rol as number,
  //     editData: editedAccounts,
  //     property: "cuentasAuxiliaresPorRol",
  //   })
  //     .then(() => {
  //       setMessage({
  //         visible: true,
  //         data: generalMessage.success,
  //       });
  //     })
  //     .catch((error) => {
  //       setMessage({
  //         visible: true,
  //         data: generalMessage.failed,
  //       });

  //       console.info(error.message);
  //     })
  //     .finally(() => {
  //       setIsLoading(false);
  //     });
  // };

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
      // handleSubmit={handleSubmit}
      withSubmitButtons={withSubmitButtons}
      hasChanges={hasChanges}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      isLoading={isLoading}
    />
  );
});
