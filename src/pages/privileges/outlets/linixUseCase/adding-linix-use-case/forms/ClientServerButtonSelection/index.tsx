import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { getData } from "@mocks/utils/dataMock.service";
import { IHandleChangeFormData } from "@pages/privileges/outlets/linixUseCase/adding-linix-use-case/index";

import { ClientServerButtonSelectionUI } from "./interface";

const LOADING_TIMEOUT = 1500;

interface ClientServerButtonSelectionProps {
  handleSubmit: (csButtonOption: string) => void;
  csSelected: string;
  handleUpdateFormData: (values: IHandleChangeFormData) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  initialValues?: { csButtonOption: string };
}

function ClientServerButtonSelection(props: ClientServerButtonSelectionProps) {
  const {
    handleSubmit,
    onHasChanges,
    csSelected,
    handleUpdateFormData,
    initialValues = { csButtonOption: "" },
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });
  const [buttonOptions, setButtonOptions] = useState<Record<string, unknown>[]>(
    []
  );

  useEffect(() => {
    getData("button-options")
      .then((data) => {
        if (data !== null) {
          setButtonOptions(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching button-options:", error.message);
      });
  }, []);

  const filteredButtonOptions = buttonOptions.filter(
    (buttonOption) => buttonOption.OPCION_CLIENTE_SERVIDOR === csSelected
  );

  const onSubmit = (csButtonOption: string) => {
    setLoading(true);
    setTimeout(() => {
      handleSubmit(csButtonOption);
      setLoading(false);
      setShowMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const formik = useFormik({
    initialValues,
    validateOnChange: false,
    onReset: () => {
      if (onHasChanges) onHasChanges(false);
    },
    onSubmit: (values) => {
      onSubmit(values.csButtonOption);
    },
  });

  useEffect(() => {
    handleUpdateFormData(formik.values.csButtonOption);
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

  const handleCloseSectionMessage = () => {
    setShowMessage({
      visible: false,
    });
  };

  return (
    <ClientServerButtonSelectionUI
      loading={loading}
      formik={formik}
      showMessage={showMessage}
      handleCloseSectionMessage={handleCloseSectionMessage}
      formInvalid={formik.isValidating || formik.isValid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={formik.handleChange}
      buttonOptions={filteredButtonOptions}
    />
  );
}

export { ClientServerButtonSelection };
export type { ClientServerButtonSelectionProps };
