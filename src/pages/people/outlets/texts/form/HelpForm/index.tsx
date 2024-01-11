import { useState } from "react";
import { HelpFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface HelpFormProps {
  textConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
  handleSubmit: (helpText: IAssignmentFormEntry[]) => void;
  onHasChanges?: (hasChanges: boolean) => void;
}

function HelpForm(props: HelpFormProps) {
  const { textConfig, palette, handleSubmit, onChange, onHasChanges } = props;
  const [helpText, setHelpText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });

  const hasChanges = (valueCompare: IAssignmentFormEntry[]) =>
    JSON.stringify(helpText) !== JSON.stringify(valueCompare);

  const handleChangeHelp = (helpText: IAssignmentFormEntry[]) => {
    setHelpText(helpText);
    if (onHasChanges) onHasChanges(hasChanges(helpText));
    handleSubmit(helpText);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(helpText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setHelpText(helpText);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <HelpFormUI
      handleChangeHelp={onChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      textConfig={textConfig}
      palette={palette}
      isLoading={isLoading}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { HelpFormProps };
export { HelpForm };
