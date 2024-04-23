import { useState, forwardRef, useImperativeHandle, useEffect } from "react";
import * as Yup from "yup";
import { useFormik, FormikProps } from "formik";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import {
  IGeneralInformation,
  IHandleChangeFormData,
} from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/types";

import { GeneralInformationFormUI } from "./interface";

import { validationMessages } from "@src/validations/validationMessages";
import { generalMessage } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/config/messages.config";

const LOADING_TIMEOUT = 1500;

const validationSchema = Yup.object({
  n_Usecase: Yup.string().required(validationMessages.required),
  i_Tipusec: Yup.string().required(validationMessages.required),
  n_Descrip: Yup.string().required(validationMessages.required),
});

interface GeneralInformationFormProps {
  initialValues: IGeneralInformation;
  handleSubmit: (values: IHandleChangeFormData) => void;
  onFormValid?: React.Dispatch<React.SetStateAction<boolean>>;
  csOptions: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
  withSubmitButtons?: boolean;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

export const GeneralInformationForm = forwardRef(
  function GeneralInformationForm(
    props: GeneralInformationFormProps,
    ref: React.Ref<FormikProps<IGeneralInformation>>
  ) {
    const {
      initialValues = {
        n_Usecase: "",
        n_Descrip: "",
        i_Tipusec: "",
        k_Funcio: "",
        k_Opcion: "",
      },
      withSubmitButtons,
      onHasChanges,
      handleSubmit,
      onFormValid,
      readOnly,
      csOptions,
      webOptions,
    } = props;
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<IMessageState>({
      visible: false,
    });

    function onSubmit() {
      setLoading(true);
      setTimeout(() => {
        handleSubmit(formik.values);
        setLoading(false);
        setMessage({
          visible: true,
          data: generalMessage.success,
        });
      }, LOADING_TIMEOUT);
    }

    const formik = useFormik({
      initialValues,
      validationSchema,
      validateOnChange: false,
      validateOnBlur: false,
      onReset: () => {
        if (onHasChanges) onHasChanges(false);
      },
      onSubmit,
    });
    const handleReset = () => {
      if (onHasChanges) onHasChanges(false);
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
      };

      if (onHasChanges) onHasChanges(hasChanges(formikValues));
      formik.setFieldValue(name, value).then(() => {
        if (withSubmitButtons) return;
        formik.validateForm().then((errors) => {
          if (!errors || Object.keys(errors).length === 0) {
            handleSubmit && handleSubmit(formikValues);
            setMessage({
              visible: true,
              data: generalMessage.success,
            });
          }
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
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [formik.values, onFormValid]);

    return (
      <GeneralInformationFormUI
        loading={loading}
        handleReset={handleReset}
        formik={formik}
        message={message}
        withSubmitButtons={withSubmitButtons}
        handleCloseSectionMessage={handleCloseSectionMessage}
        hasChanges={hasChanges}
        onCloseSectionMessage={handleCloseSectionMessage}
        formInvalid={formik.isValidating || formik.isValid}
        handleSubmitForm={handleSubmitForm}
        handleChangeForm={handleChangeForm}
        readOnly={readOnly}
        csOptions={csOptions}
        webOptions={webOptions}
      />
    );
  }
);
