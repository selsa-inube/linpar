import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";

import { validationMessages } from "@validations/validationMessages";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { generalMessage } from "@pages/privileges/outlets/positions/add-position/config/messages.config";
import { updateItemData } from "@mocks/utils/dataMock.service";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;
export interface IGeneralInformationUsersForm {
  k_Usuari: string;
}

const validationSchema = Yup.object({
  position: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationUsersForm;
  positionsOptions: Record<string, unknown>[];
  id?: string;
  loading?: boolean;
  withSubmitButtons?: boolean;
  handleSubmit?: (values: IGeneralInformationUsersForm) => void;
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
      id,
      withSubmitButtons,
      positionsOptions,
      handleSubmit,
      onFormValid,
      onHasChanges,
    } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    const editDataPosition = async () => {
      await updateItemData({
        key: "k_Usuari",
        nameDB: "linix-users",
        identifier: id!,
        editData: formik.values,
      });
    };

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnBlur: false,
      onSubmit: () => {
        setLoading(true);
        setTimeout(() => {
          handleSubmit && handleSubmit(formik.values);
          editDataPosition();
          setLoading(false);
          setMessage({
            visible: true,
            data: generalMessage.success,
          });
        }, LOADING_TIMEOUT);
      },
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

    const disabledButtons = (valueCompare: IGeneralInformationUsersForm) =>
      JSON.stringify(formik.initialValues) !== JSON.stringify(valueCompare);

    const handleChangeForm = (
      event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
      if (onHasChanges) onHasChanges(disabledButtons(formik.values));
      formik
        .setFieldValue(event.target.name, event.target.value)
        .then((errors) => {
          if (withSubmitButtons) return;

          if (!errors || Object.keys(errors).length === 0) {
            handleSubmit &&
              handleSubmit({
                ...formik.values,
                [event.target.name]: event.target.value,
              });
          }
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
        positionsOptions={positionsOptions}
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
