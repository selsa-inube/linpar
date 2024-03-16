import { useEffect, useState } from "react";
import { useFormik } from "formik";

import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { getData } from "@mocks/utils/dataMock.service";
import { ClientServerButtonSelectionUI } from "./interface";

const LOADING_TIMEOUT = 1500;

export interface IClientServerButtonSelectionProps {
  caseUseLinixName: string;
  description: string;
  webOptions: string;
  ClientServerOption: string;
  actionCaseUse: string;
}

interface ClientServerButtonSelectionProps {
  withSubmitButtons?: boolean;
  initialValues?: IClientServerButtonSelectionProps;
  handleSubmit: (values: IClientServerButtonSelectionProps) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  readOnly?: boolean;
}

function ClientServerButtonSelection(props: ClientServerButtonSelectionProps) {
  const {
    initialValues = {
      caseUseLinixName: "",
      description: "",
      actionCaseUse: "",
      webOptions: "",
      ClientServerOption: "",
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
  const [buttonOptionsMock, setbuttonOptionsMock] = useState<
    Record<string, unknown>[]
  >([]);
  const [webOptions, setWebOptions] = useState<Record<string, unknown>[]>([]);

  useEffect(() => {
    getData("button-option")
      .then((data) => {
        if (data !== null) {
          setbuttonOptionsMock(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching linix-use-cases:", error.message);
      });

    getData("web-options")
      .then((data) => {
        if (data !== null) {
          setWebOptions(data as Record<string, unknown>[]);
        }
      })
      .catch((error) => {
        console.error("Error fetching web-options:", error.message);
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

  const hasChanges = (valueCompare: IClientServerButtonSelectionProps) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

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
      withSubmitButtons={withSubmitButtons}
      handleCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      formInvalid={formik.isValidating || formik.isValid}
      handleSubmitForm={handleSubmitForm}
      handleChangeForm={formik.handleChange}
      readOnly={readOnly}
      buttonOptionsMock={buttonOptionsMock}
      webOptions={webOptions}
    />
  );
}

export { ClientServerButtonSelection };
export type { ClientServerButtonSelectionProps };
