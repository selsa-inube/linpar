import { forwardRef, useEffect, useState } from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

import { validationMessages } from "@validations/validationMessages";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/positions/add-position/config/messages.config";
import {
  IGeneralInformation,
  IHandleChangeFormData,
} from "@services/users/users.types";

import { GeneralInformationFormUI } from "./interface";

export interface IGeneralInformationUsersForm {
  k_Usuari: string;
}

const validationSchema = Yup.object({
  position: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformation;
  positions: Record<string, unknown>[];
  id?: string;
  loading?: boolean;
  withSubmitButtons?: boolean;
  handleSubmit: (values: IHandleChangeFormData) => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onHasChanges?: (hasChanges: boolean) => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationUsersForm>>
  ) {
    const {
      initialValues,
      withSubmitButtons,
      positions,
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
    const hasChanges = (valueCompare: IGeneralInformation) =>
      JSON.stringify(initialValues) !== JSON.stringify(valueCompare);
    const handleCloseSectionMessage = () => {
      setMessage({
        visible: false,
      });
    };

    const handleChangeForm = (name: string, value: string) => {
      const formikValues = {
        ...formik.values,
        [name]: value,
        loading: true,
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
        positions={positions}
        message={message}
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
