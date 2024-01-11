import { useState } from "react";
import { GrayFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface GrayFormProps {
  textConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
  handleSubmit: (grayText: IAssignmentFormEntry[]) => void;
  onHasChanges?: (hasChanges: boolean) => void;
}

function GrayForm(props: GrayFormProps) {
  const { textConfig, palette, handleSubmit, onChange, onHasChanges } = props;
  const [grayText, setGrayText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangeGray = (grayText: IAssignmentFormEntry[]) => {
    setGrayText(grayText);
    if (onHasChanges) onHasChanges(hasChanges(grayText));
    handleSubmit(grayText);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(grayText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setGrayText(textConfig);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <GrayFormUI
      handleChangeGray={onChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      palette={palette}
      textConfig={textConfig}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { GrayFormProps };
export { GrayForm };
