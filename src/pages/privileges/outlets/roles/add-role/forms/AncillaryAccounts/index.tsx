import { FormikProps, useFormik } from "formik";
import { forwardRef, useImperativeHandle } from "react";
import { AncillaryAccountsFormsUI } from "./interface";

export interface IAncillaryAccountsForm {
  officialSector: string;
  commercialSector: string;
  solidaritySector: string;
}

interface IAncillaryAccountsFormProps {
  initialValues: IAncillaryAccountsForm;
  onSubmit?: (values: IAncillaryAccountsForm) => void;
  loading?: boolean;
}

export const AncillaryAccountsForm = forwardRef(function AncillaryAccountsForm(
  props: IAncillaryAccountsFormProps,
  ref: React.Ref<FormikProps<IAncillaryAccountsForm>>
) {
  const { initialValues, onSubmit, loading } = props;

  const formik = useFormik({
    initialValues,
    validateOnBlur: true,
    onSubmit: onSubmit || (() => true),
  });

  useImperativeHandle(ref, () => formik);

  return <AncillaryAccountsFormsUI loading={loading} formik={formik} />;
});
