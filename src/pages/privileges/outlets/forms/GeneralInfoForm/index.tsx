import { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { EMessageType } from "@src/types/messages.types";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import {
  IGeneralInformationEntry,
  IMessageState,
} from "@pages/privileges/outlets/users/types/forms.types";

import { GeneralInformationFormUI } from "./interface";
import { generalMessage } from "../../linixUseCase/adding-linix-use-case/config/messages.config";

const LOADING_TIMEOUT = 1500;

const validationSchema = Yup.object({
  email: validationRules.email.required(validationMessages.required),
  phone: validationRules.phone.required(validationMessages.required),
});

interface GeneralInformationFormProps {
  withSubmitButtons?: boolean;
  currentInformation: IGeneralInformationEntry;
  handleSubmit: (values: IGeneralInformationEntry) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
  positionsOptions: Record<string, unknown>[];
}

function GeneralInformationForm(props: GeneralInformationFormProps) {
  const {
    withSubmitButtons,
    currentInformation,
    handleSubmit,
    onHasChanges,
    readOnly,
    positionsOptions,
  } = props;

  const [loading, setLoading] = useState(false);

  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });
  const [formInvalid, setFormInvalid] = useState(false);

  const initialValues: IGeneralInformationEntry = {
    id: currentInformation.id,
    username: currentInformation.username,
    userID: currentInformation.userID,
    email: currentInformation.email,
    phone: currentInformation.phone || "",
    position: currentInformation.position || "",
    active: false,
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    validateOnChange: false,

    onReset: () => {
      if (onHasChanges) onHasChanges(false);
    },

    onSubmit: () => {
      setLoading(true);

      setTimeout(() => {
        handleSubmit(formik.values);
        setFormInvalid(false);
        setLoading(false);
        setShowMessage({
          visible: true,
          type: EMessageType.SUCCESS,
        });
      }, LOADING_TIMEOUT);
    },
  });

  const handleSubmitForm = () => {
    formik.validateForm().then((errors) => {
      if (Object.keys(errors).length > 0) {
        setShowMessage({
          visible: true,
          type: EMessageType.FAILED,
        });
        setFormInvalid(true);
      }
      formik.handleSubmit();
    });
  };

  const hasChanges = (valueCompare: IGeneralInformationEntry) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

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
          setShowMessage({
            visible: true,
            data: generalMessage.success,
          });
        }
      });
    });
  };

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
      formInvalid={formInvalid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={handleChangeForm}
      readOnly={readOnly}
      positionsOptions={positionsOptions}
    />
  );
}

export { GeneralInformationForm };
export type { GeneralInformationFormProps };
