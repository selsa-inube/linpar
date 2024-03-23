import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";

import { getData } from "@src/mocks/utils/dataMock.service";

import { GeneralInformationFormUI } from "./interface";

export interface IGeneralInformationForm {
  roleName: string;
  description: string;
  aplication: string;
}

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationForm;
  onSubmit?: (values: IGeneralInformationForm) => void;
  loading?: boolean;
  handleSubmit: (name: string, values: string) => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationForm>>
  ) {
    const { initialValues, onSubmit, loading, handleSubmit } = props;

    const [linixUseCases, setLinixUseCases] = useState<
      Record<string, unknown>[]
    >([]);

    useEffect(() => {
      getData("linix-use-cases")
        .then((data) => {
          setLinixUseCases(data as Record<string, unknown>[]);
        })
        .catch((error) => {
          console.info(error.message);
        });
    }, []);

    const formik = useFormik({
      initialValues,
      validateOnBlur: true,
      onSubmit: onSubmit || (() => true),
    });

    useImperativeHandle(ref, () => formik);

    return (
      <GeneralInformationFormUI
        loading={loading}
        formik={formik}
        handleSubmit={handleSubmit}
        linixUseCases={linixUseCases}
      />
    );
  }
);
