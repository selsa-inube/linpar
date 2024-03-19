import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { getData } from "@mocks/utils/dataMock.service";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IGeneralInformationForm {
  aplication: string;
  description: string;
  roleName: string;
}

export interface IGeneralInformationFormProps {
  handleSubmit: (values: IGeneralInformationForm) => void;
  valuesData: IGeneralInformationForm;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
  withSubmitButtons?: boolean;
}

function GeneralInformationForm(props: IGeneralInformationFormProps) {
  const {
    withSubmitButtons,
    valuesData,
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

  const formik = useFormik({
    initialValues: { ...valuesData },
    validateOnChange: false,

    onSubmit: () => {
      setLoading(true);
      setTimeout(() => {
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
      }
      formik.handleSubmit();
    });
  };

  const hasChanges = (valueCompare: IGeneralInformationForm) =>
    JSON.stringify(valuesData) !== JSON.stringify(valueCompare);

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
      formInvalid={formik.isValidating || formik.isValid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={handleChangeForm}
      readOnly={readOnly}
      linixUseCases={linixUseCases}
    />
  );
}

export { GeneralInformationForm };
