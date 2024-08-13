import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { validationMessages } from "@validations/validationMessages";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "../../add-position/config/messages.config";
import { GeneralInformationFormUI } from "./interface";
import {
  IGeneralInformation,
  IHandleUpdateDataSwitchstep,
} from "../../add-position/types";

export interface IGeneralInformationEntry {
  k_Grupo?: string;
  n_Grupo: string;
  n_Uso: string;
}

const validationSchema = Yup.object({
  n_Grupo: Yup.string().required(validationMessages.required),
  n_Uso: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationEntry;
  id?: string;
  loading?: boolean;
  withSubmitButtons?: boolean;
  handleSubmit?: (values: IHandleUpdateDataSwitchstep) => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onHasChanges?: (hasChanges: boolean) => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationEntry>>
  ) {
    const {
      initialValues,
      withSubmitButtons,
      handleSubmit,
      onFormValid,
      onHasChanges,
    } = props;

    const [loading] = useState(false);
    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnChange: false,
      validateOnBlur: false,
      onReset: () => {
        if (onHasChanges) onHasChanges(false);
      },
      onSubmit: () => {},
    });

    useImperativeHandle(ref, () => formik);

    const handleCloseSectionMessage = () => {
      setMessage({
        visible: false,
      });
    };

    const handleSubmitForm = () => {
      formik.validateForm().then((errors) => {
        if (Object.keys(errors).length > 0) {
          setMessage({
            visible: true,
            data: generalMessage.failed,
          });
        }

        formik.handleSubmit();
      });
    };

    const disabledButtons = (valueCompare: IGeneralInformationEntry) =>
      JSON.stringify(formik.initialValues) !== JSON.stringify(valueCompare);
    const hasChanges = (valueCompare: IGeneralInformation) =>
      JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

    const handleChangeForm = (name: string, value: string) => {
      const formikValues = {
        ...formik.values,
        [name]: value,
      };

      if (onHasChanges) onHasChanges(hasChanges(formikValues));
      formik.setFieldValue(name, value).then(() => {
        formik.validateForm().then((errors) => {
          handleSubmit && handleSubmit(formikValues);
          setMessage({
            visible: true,
            data: generalMessage.success,
          });
        });
      });
    };
    useImperativeHandle(ref, () => formik);
    useEffect(() => {
      if (formik.values) {
        formik.validateForm().then((errors) => {
          onFormValid && onFormValid(Object.keys(errors).length === 0);
        });
      }
    }, [formik.values, onFormValid]);

    return (
      <GeneralInformationFormUI
        formik={formik}
        message={message}
        disabledButtons={disabledButtons}
        handleCloseSectionMessage={handleCloseSectionMessage}
        handleChangeForm={handleChangeForm}
        handleSubmitForm={handleSubmitForm}
        handleReset={handleCloseSectionMessage}
        loading={loading}
        withSubmitButtons={withSubmitButtons}
      />
    );
  }
);
