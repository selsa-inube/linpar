import { forwardRef, useEffect, useImperativeHandle, useState } from "react";
import { GeneralInformationFormUI } from "./interface";
import { FormikProps, useFormik } from "formik";
import * as Yup from "yup";
import { validationMessages } from "@src/validations/validationMessages";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";
import { functionById } from "@src/mocks/utils/dataMock.service";
import { generalMessage } from "../../config/messages.config";
import { IHandleUpdateDataSwitchstep } from "../../types";

const LOADING_TIMEOUT = 1500;
export interface IGeneralInformationEntry {
  n_Grupo: string;
  n_Uso: string;
}

const validationSchema = Yup.object({
  n_Grupo: Yup.string().required(validationMessages.required),
  n_Uso: Yup.string().required(validationMessages.required),
});

interface IGeneralInformationFormProps {
  initialValues: IGeneralInformationEntry;
  withSubmitButtons?: boolean;
  loading?: boolean;
  id?: string;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  handleSubmit?: (values: IHandleUpdateDataSwitchstep) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  editItemData?: (props: functionById) => Promise<unknown>;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: IGeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformationEntry>>
  ) {
    const {
      initialValues,
      withSubmitButtons,
      id,
      handleSubmit,
      onFormValid,
      onHasChanges,
      editItemData,
    } = props;

    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    const editDataPosition = async () => {
      if (editItemData) {
        await editItemData({
          key: "k_Grupo",
          nameDB: "linix-positions",
          identifier: id!,
          editData: formik.values,
        });
      }
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

    const disabledButtons = (valueCompare: IGeneralInformationEntry) =>
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values, onFormValid]);

    return (
      <GeneralInformationFormUI
        formik={formik}
        message={message}
        loading={loading}
        withSubmitButtons={withSubmitButtons}
        handleSubmitForm={handleSubmitForm}
        handleChangeForm={handleChangeForm}
        handleReset={handleCloseSectionMessage}
        handleCloseSectionMessage={handleCloseSectionMessage}
        disabledButtons={disabledButtons}
      />
    );
  }
);
