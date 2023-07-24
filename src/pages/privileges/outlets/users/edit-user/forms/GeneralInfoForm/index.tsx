import { EMessageType } from "@src/types/messages.types";
import { validationMessages } from "@validations/validationMessages";
import { validationRules } from "@validations/validationRules";
import { useFormik } from "formik";
import { useState } from "react";
import * as Yup from "yup";
import {
  IGeneralInformationEntry,
  IMessageState,
} from "../../../types/forms.types";
import { GeneralInformationFormUI } from "./interface";

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
}

function GeneralInformationForm(props: GeneralInformationFormProps) {
  const {
    withSubmitButtons,
    currentInformation,
    handleSubmit,
    onHasChanges,
    readOnly,
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

  const handleChangeForm = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const formikValues = {
      ...formik.values,
      [event.target.name]: event.target.value,
    };

    if (onHasChanges) onHasChanges(hasChanges(formikValues));
    formik.setFieldValue(event.target.name, event.target.value).then(() => {
      if (withSubmitButtons) return;
      formik.validateForm().then((errors) => {
        if (!errors || Object.keys(errors).length === 0) {
          handleSubmit(formikValues);
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
    />
  );
}

export { GeneralInformationForm };
export type { GeneralInformationFormProps };
