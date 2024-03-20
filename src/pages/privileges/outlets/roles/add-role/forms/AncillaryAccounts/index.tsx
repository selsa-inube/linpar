import { FormikProps, useFormik } from "formik";
import { forwardRef, useEffect, useImperativeHandle } from "react";
import { AncillaryAccountsFormsUI } from "./interface";

export interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

interface IAncillaryAccountsFormProps {
  initialValues: IAncillaryAccountsForm;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IAncillaryAccountsForm) => void;
  loading?: boolean;
}

export const AncillaryAccountsForm = forwardRef(function AncillaryAccountsForm(
  props: IAncillaryAccountsFormProps,
  ref: React.Ref<FormikProps<IAncillaryAccountsForm>>
) {
  const { initialValues, onFormValid, onSubmit, loading } = props;

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit: onSubmit || (() => true),
  });

  useImperativeHandle(ref, () => formik);

  useEffect(() => {
    if (formik.dirty) {
      formik.validateForm().then((errors) => {
        onFormValid(Object.keys(errors).length === 0);
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formik.values]);

  return <AncillaryAccountsFormsUI loading={loading} formik={formik} />;
});
