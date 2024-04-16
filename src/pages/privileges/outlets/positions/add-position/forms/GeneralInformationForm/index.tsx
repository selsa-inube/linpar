import { forwardRef, useImperativeHandle } from "react";
import { GeneralInformationFormUI } from "./interface";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { validationMessages } from "@src/validations/validationMessages";

export interface IGeneralInformationEntry {
  positionName: string;
  description: string;
}

const validationSchema = Yup.object({
  positionName: Yup.string().required(validationMessages.required),
  description: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationEntry;
  onFormValid: React.Dispatch<React.SetStateAction<boolean>>;
  onSubmit?: (values: IGeneralInformationEntry) => void;
  loading?: boolean;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationEntry>>
  ) {
    const { initialValues, onFormValid, onSubmit } = props;

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnBlur: false,
      onSubmit: onSubmit || (() => true),
    });

    useImperativeHandle(ref, () => formik);

    const customHandleBlur = (
      event: React.FocusEvent<HTMLElement, Element>
    ) => {
      formik.handleBlur(event);

      if (onSubmit) return;

      formik.validateForm().then((errors) => {
        onFormValid(Object.keys(errors).length === 0);
      });
    };
    return (
      <GeneralInformationFormUI
        formik={formik}
        customHandleBlur={customHandleBlur}
      />
    );
  }
);
