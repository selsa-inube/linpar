import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";

import { getAll } from "@src/mocks/utils/dataMock.service";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IGeneralInformationForm {
  k_Rol: string;
  roleName: string;
  description: string;
  aplication: string;
  aplicationId: string;
}

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationForm;
  onSubmit?: (values: IGeneralInformationForm) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  handleSubmit?: () => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationForm>>
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

    const [linixRoles, setLinixRoles] = useState<Record<string, unknown>[]>([]);
    const [, forceUpdate] = useState();

    useEffect(() => {
      setIsLoading(true);
      getAll("linix-use-cases")
        .then((data) => {
          setLinixRoles(data as Record<string, unknown>[]);
          setIsLoading(false);
        })
        .catch((error) => {
          console.info(error.message);
        });
    }, []);

    let formik = useFormik({
      initialValues,
      validateOnBlur: true,
      onSubmit: onSubmit || (() => true),
      enableReinitialze: true,
    });

    useEffect(() => {
      // console.log("acutalizar----------");
      // console.log("initialValues", initialValues);
      formik.initialValues = initialValues;
      formik.values = initialValues;
      formik.setValues(initialValues);
      // console.log("acutalizar----------");
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [initialValues]);

    useImperativeHandle(ref, () => formik);

    const hasChanges = (valueCompare: IGeneralInformationForm) =>
      JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

    const handleSubmitForm = () => {
      setIsLoading(true);
      const editedValues = {
        k_Aplica: formik.values.aplicationId,
        k_Rol: formik.values.k_Rol,
        n_Rol: formik.values.roleName,
        n_Uso: formik.values.description,
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
        forceUpdate({});
      }, LOADING_TIMEOUT);
    };

    const handleCloseSectionMessage = () => {
      setMessage({
        visible: false,
      });
    };

    // console.log("linixRoles", linixRoles);
    // console.log("props", props);
    // console.log("initialValues", initialValues);
    // console.log("formik.initialValues", formik.initialValues);
    // console.log("formik.values", formik.values);

    return (
      <>
        <GeneralInformationFormUI
          formik={formik}
          handleSubmitForm={handleSubmitForm}
          linixRoles={linixRoles}
          withSubmitButtons={withSubmitButtons}
          hasChanges={hasChanges}
          message={message}
          onCloseSectionMessage={handleCloseSectionMessage}
          isLoading={isLoading}
        />
      </>
    );
  }
);
