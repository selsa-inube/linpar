import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { getData } from "@mocks/utils/dataMock.service";
import { ClientServerButtonSelectionUI } from "./interface";

const LOADING_TIMEOUT = 1500;

interface ClientServerButtonSelectionProps {
  handleSubmit: (csButtonOption: string) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function ClientServerButtonSelection(props: ClientServerButtonSelectionProps) {
  const { handleSubmit, onHasChanges, readOnly } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });
  const [buttonOptionsMock, setButtonOptionsMock] = useState<
    Record<string, unknown>[]
  >([]);

  useEffect(() => {
    getData("button-option")
      .then((data) => {
        if (data !== null) {
          setButtonOptionsMock(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching button-options:", error.message);
      });
  }, []);

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
    initialValues: {
      csButtonOption: "",
    },
    validateOnChange: false,
    onReset: () => {
      if (onHasChanges) onHasChanges(false);
    },
    onSubmit: (values) => {
      onSubmit(values.csButtonOption);
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

  const hasChanges = (valueCompare: string) =>
    formik.values.csButtonOption !== valueCompare;

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
      readOnly={readOnly}
      buttonOptionsMock={buttonOptionsMock}
    />
  );
}

export { ClientServerButtonSelection };
export type { ClientServerButtonSelectionProps };
