import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

import { updateItemData } from "@mocks/utils/dataMock.service";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";
import { validationMessages } from "@src/validations/validationMessages";

import { GeneralInformationFormUI } from "./interface";

const validationSchema = Yup.object({
  roleName: Yup.string().required(validationMessages.required),
  description: Yup.string().required(validationMessages.required),
  application: Yup.string().required(validationMessages.required),
});

export interface IGeneralInformationForm {
  roleName: string;
  description: string;
  application: string;
  applicationId: string;
}

interface IGeneralInformationFormProps {
  linixRoles: Record<string, unknown>[];
  initialValues: IGeneralInformationForm;
  rol_id?: string | number;
  onSubmit?: (values: IGeneralInformationForm) => void;
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  handleAddRoleFormValid?: (newValue: boolean) => void;
  currentStep?: number;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationForm>>
  ) {
    const {
      initialValues,
      rol_id,
      onSubmit,
      withSubmitButtons = false,
      linixRoles,
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

    useImperativeHandle(ref, () => formik);

    const hasChanges = (valueCompare: IGeneralInformationForm) =>
      JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

    const handleSubmit = async () => {
      setIsLoading(true);
      const editedInfo = {
        k_Rol: rol_id as string,
        n_Rol: formik.values.roleName,
        k_Tipcon: rol_id as string,
        k_Aplica: formik.values.application,
        n_Uso: formik.values.description,
      };

      await updateItemData({
        key: "k_Rol",
        nameDB: "linix-roles",
        identifier: rol_id as string,
        editData: editedInfo,
      })
        .then(() => {
          setMessage({
            visible: true,
            data: generalMessage.success,
          });
        })
        .catch((error) => {
          setMessage({
            visible: true,
            data: generalMessage.failed,
          });

          console.info(error.message);
        })
        .finally(() => {
          setIsLoading(false);
        });
    };

    const handleCloseSectionMessage = () => {
      setMessage({
        visible: false,
      });
    };

    useEffect(() => {
      if (formik.values) {
        formik.validateForm();
      }
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values]);

    if (handleAddRoleFormValid) handleAddRoleFormValid(formik.isValid);

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
