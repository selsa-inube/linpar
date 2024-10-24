import { useContext, useEffect, useState } from "react";
import { useFormik } from "formik";
import { useAuth0 } from "@auth0/auth0-react";

import { getClientServerButtonDataFormats } from "@services/linixUseCase/clientServerButtonData";
import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { LinparContext } from "@context/AppContext";
import {
  IHandleChangeFormData,
  IClientServerButton,
} from "@pages/catalogs/outlets/linixUseCase/adding-linix-use-case/types";
import { ClientServerButtonSelectionUI } from "./interface";

const LOADING_TIMEOUT = 1500;

interface ClientServerButtonSelectionProps {
  id?: string;
  handleSubmit: (values: IHandleChangeFormData) => void;
  onHasChanges?: (hasChanges: boolean) => void;
  initialValues?: IClientServerButton;
  withSubmitButtons?: boolean;
}

function ClientServerButtonSelection(props: ClientServerButtonSelectionProps) {
  const {
    id,
    handleSubmit,
    onHasChanges,
    initialValues = { k_option_button: "" },
    withSubmitButtons = false,
  } = props;

  const [loading, setLoading] = useState(false);
  const [showMessage, setShowMessage] = useState<IMessageState>({
    visible: false,
  });
  const [buttonOptions, setButtonOptions] = useState<Record<string, unknown>[]>(
    []
  );
  const { user } = useAuth0();
  const { linparData } = useContext(LinparContext);

  const clientServerButtonMenuOption = async (id: string) => {
    if (!user) return;
    if (buttonOptions.length === 0) {
      setLoading(true);
      try {
        const newUsers = await getClientServerButtonDataFormats(
          id,
          linparData.businessUnit.businessUnitPublicCode
        );
        setButtonOptions(newUsers);
      } catch (error) {
        console.info(error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    clientServerButtonMenuOption(id!);
  }, [user]);

  const onSubmit = () => {
    setLoading(true);
    setTimeout(() => {
      handleSubmit(formik.values);
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

  const hasChanges = (valueCompare: IClientServerButton) =>
    JSON.stringify(initialValues) !== JSON.stringify(valueCompare);

  const handleCloseSectionMessage = () => {
    setShowMessage({
      visible: false,
    });
  };

  const handleChangeForm = (name: string, value: string) => {
    const formikValues = {
      ...formik.values,
      [name]: value,
    };
    if (onHasChanges) onHasChanges(hasChanges(formikValues));
    formik.setFieldValue(name, value).then(() => {
      if (withSubmitButtons) return;
      formik.validateForm().then((errors) => {
        handleSubmit(formikValues);
      });
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
      handleChangeForm={handleChangeForm}
      buttonOptions={buttonOptions}
      withSubmitButtons={withSubmitButtons}
      hasChanges={hasChanges}
    />
  );
}

export { ClientServerButtonSelection };
export type { ClientServerButtonSelectionProps };
