import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import {
  IGeneralInformation,
  IHandleChangeFormData,
} from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/index";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

interface GeneralInformationFormProps {
  handleSubmit: (values: IGeneralInformation) => void;
  csOptions: Record<string, unknown>[];
  webOptions: Record<string, unknown>[];
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  withSubmitButtons?: boolean;
  initialValues?: IGeneralInformation;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function GeneralInformationForm(props: GeneralInformationFormProps) {
  const {
    initialValues = {
      n_Usecase: "",
      n_Descrip: "",
      i_Tipusec: "",
      k_Funcio: "",
      k_Opcion: "",
    },
    withSubmitButtons,
    handleSubmit,
    onHasChanges,
    readOnly,
    csOptions,
    webOptions,
    handleUpdateFormData,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });

  function onSubmit() {
    setLoading(true);
    setTimeout(() => {
      handleSubmit(formik.values);

      setLoading(false);
      setShowMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  }

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onReset: () => {
      if (onHasChanges) onHasChanges(false);
    },
    onSubmit,
  });

  useEffect(() => {
    handleUpdateFormData(formik.values);
  }, [formik.values, handleUpdateFormData]);

  const handleSubmitForm = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage({
          visible: true,
          type: EMessageType.FAILED,
        });
      }
      formik.handleSubmit();
    });
  };

  const hasChanges = (valueCompare: IGeneralInformation) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleCloseSectionMessage = () => {
    setShowMessage({
      visible: false,
    });
  };

  return (
    <GeneralInformationFormUI
      loading={loading}
      formik={formik}
      showMessage={showMessage}
      withSubmitButtons={withSubmitButtons}
      handleCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      formInvalid={formik.isValidating || formik.isValid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={formik.handleChange}
      readOnly={readOnly}
      csOptions={csOptions}
      webOptions={webOptions}
    />
  );
}

export { GeneralInformationForm };
