import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";

import { getAll } from "@src/mocks/utils/dataMock.service";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IGeneralInformationForm {
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
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationForm>>
  ) {
    const { initialValues, onSubmit, withSubmitButtons = false } = props;
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    const [linixRoles, setLinixRoles] = useState<Record<string, unknown>[]>([]);

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

    const formik = useFormik({
      initialValues,
      validateOnBlur: true,
      onSubmit: onSubmit || (() => true),
    });

    useImperativeHandle(ref, () => formik);

    const hasChanges = (valueCompare: IGeneralInformationForm) =>
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

    return (
      <>
        <GeneralInformationFormUI
          formik={formik}
          handleSubmit={handleSubmit}
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
