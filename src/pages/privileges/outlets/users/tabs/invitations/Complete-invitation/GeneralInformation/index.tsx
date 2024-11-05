import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import { object, string } from "yup";

import { validationMessages } from "@validations/validationMessages";

import {
  IInvitation,
  IInvitationsEntry,
} from "@services/users/invitation.types";
import { GeneralInformationFormUI } from "./interface";
import { IMessageState } from "../../../../types/forms.types";
import { generalMessage } from "../../../users/EditUser/config/messages.config";

const validationSchema = object({
  positionsId: string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IInvitation;
  positions: Record<string, unknown>[];
  handleSubmit?: (values: IInvitation) => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  onHasChanges?: (hasChanges: boolean) => void;
  onFormValueChange?: (values: IInvitation) => void;
  onSubmit?: (values: IInvitation) => void;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IInvitation>>
  ) {
    const {
      initialValues,
      positions,
      onFormValid,
      onHasChanges,
      onFormValueChange,
      onSubmit,
    } = props;

    const [loading] = useState(false);
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

    const hasChanges = (valueCompare: IInvitationsEntry) =>
      JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

    const handleChangeForm = (name: string, value: string) => {
      const formikValues = {
        ...formik.values,
        [name]: value,
      };
      if (onHasChanges) onHasChanges(hasChanges(formikValues));
      formik.setFieldValue(name, value).then(() => {
        formik.validateForm().then((errors) => {
          onFormValueChange && onFormValueChange(formikValues);
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
        loading={loading}
        message={message}
        formik={formik}
        handleChangeForm={handleChangeForm}
        positions={positions}
      />
    );
  }
);
