import { useState, useEffect } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { getData } from "@mocks/utils/dataMock.service";

import { GeneralInformationFormUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IGeneralInformationFormProps {
  roleName: string;
  description: string;
  aplication: string;
}

export interface GeneralInformationFormProps {
  withSubmitButtons?: boolean;
  initialValuesData: IGeneralInformationFormProps;
  handleSubmit: (values: IGeneralInformationFormProps) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function GeneralInformationForm(props: GeneralInformationFormProps) {
  const {
    withSubmitButtons,
    initialValuesData,
    handleSubmit,
    onHasChanges,
    readOnly,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });

  //const [formInvalid, setFormInvalid] = useState(false);

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

  /*   const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onReset: () => {
      if (onHasChanges) onHasChanges(false);
    },
    onSubmit: (values) => {
      console.log("values, Andres", values);
    },
  }); */

  const initialValues: IGeneralInformationFormProps = {
    roleName: initialValuesData.roleName,
    description: initialValuesData.description,
    aplication: initialValuesData.aplication,
  };

  console.log("initialValus", initialValuesData);

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
        //setFormInvalid(false);
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

  const hasChanges = (valueCompare: IGeneralInformationFormProps) =>
    JSON.stringify(initialValuesData) !== JSON.stringify(valueCompare);

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
      formInvalid={formik.isValidating || formik.isValid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={handleChangeForm}
      readOnly={readOnly}
      linixUseCases={linixUseCases}
    />
  );
}

export { GeneralInformationForm };
