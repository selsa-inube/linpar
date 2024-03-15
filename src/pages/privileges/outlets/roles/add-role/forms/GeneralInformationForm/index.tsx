import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { getData } from "@mocks/utils/dataMuck.service";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IGeneralInformationFormProps {
  roleName: string;
  description: string;
  aplication: string;
}

export interface GeneralInformationFormProps {
  withSubmitButtons?: boolean;
  initialValues?: IGeneralInformationFormProps;
  handleSubmit: (values: IGeneralInformationFormProps) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function GeneralInformationForm(props: GeneralInformationFormProps) {
  const {
    initialValues = {
      roleName: "",
      description: "",
      aplication: "",
    },
    withSubmitButtons,
    handleSubmit,
    onHasChanges,
    readOnly,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });
  const [linixUseCases, setLinixUseCases] = useState<Record<string, unknown>[]>(
    []
  );

  useEffect(() => {
    getData("linix-use-cases")
      .then((data) => {
        if (data !== null) {
          setLinixUseCases(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.info(error.message);
      });
  }, []);

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

  const hasChanges = (valueCompare: IGeneralInformationFormProps) =>
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
      linixUseCases={linixUseCases}
    />
  );
}

export { GeneralInformationForm };
