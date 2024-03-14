import { useState } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IGeneralInformationFormProps {
  roleName: string;
  description: string;
  aplication: string;
}

interface GeneralInformationFormProps {
  withSubmitButtons?: boolean;
  initialValues: IGeneralInformationFormProps;
  handleSubmit: (values: IGeneralInformationFormProps) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function GeneralInformationForm(props: GeneralInformationFormProps) {
  const {
    initialValues,
    withSubmitButtons,
    handleSubmit,
    onHasChanges,
    readOnly,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });
  const [formInvalid, setFormInvalid] = useState(false);

  console.log(initialValues, "initialValues");

  /*  const initialValues: IGeneralInformationFormProps = {
    roleName: "",
    description: "",
    aplication: "",
  };
 */
  const formik = useFormik({
    initialValues,
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

  const hasChanges = (valueCompare: IGeneralInformationFormProps) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleChangeForm = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const formikValues = {
      ...formik.values,
      [event.target.name]: event.target.value,
    };

    if (onHasChanges) onHasChanges(hasChanges(formikValues));
    try {
      await formik.setFieldValue(event.target.name, event.target.value);
      if (withSubmitButtons) return;
      const errors = await formik.validateForm();
      if (!errors || Object.keys(errors).length === 0) {
        handleSubmit(formikValues);
      }
    } catch (errors) {
      return errors;
    }
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
