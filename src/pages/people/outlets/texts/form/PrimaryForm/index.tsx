import { useState } from "react";
import { PrimaryFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import { IMessageState } from "@src/pages/privileges/outlets/users/types/forms.types";

const LOADING_TIMEOUT = 1500;

interface PrimaryFormProps {
  textConfig: any;
  palette: typeof inube;
  handleSubmit: (textConfig: any) => void;
  onHasChanges?: (hasChanges: boolean) => void;
}

function PrimaryForm(props: PrimaryFormProps) {
  const { textConfig, palette, handleSubmit, onHasChanges } = props;
  const [primaryText, setPrimaryText] = useState(textConfig);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedTokenName, setSelectedTokenName] = useState("");
  const [message, setMessage] = useState<IMessageState>({
    visible: false,
  });
  const [tokenNames, setTokenNames] = useState(() => {
    const initialNames: any = {};
    Object.entries(textConfig.status).forEach(([key, config]: any) => {
      initialNames[key] = config.tokenName;
    });
    return initialNames;
  });

  const hasChanges = (valueCompare: any) =>
    JSON.stringify(textConfig) !== JSON.stringify(valueCompare);

  const handleChangePrimaryTokens = (key: string, tokenName: string) => {
    setTokenNames((prevNames: any) => ({ ...prevNames, [key]: tokenName }));
  };
  // const handleChangePrimaryTokens = (textConfig: any) => {
  //   setPrimaryText(textConfig);
  //   if (onHasChanges) onHasChanges(hasChanges(textConfig));
  //   handleSubmit(textConfig);
  // };

  const handleSubmitForm = () => {
    setIsLoading(true);

    setTimeout(() => {
      handleSubmit(primaryText);
      setIsLoading(false);
      setMessage({
        visible: true,
        type: EMessageType.SUCCESS,
      });
    }, LOADING_TIMEOUT);
  };

  const handleReset = () => {
    setPrimaryText(textConfig);
    if (onHasChanges) onHasChanges(false);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <PrimaryFormUI
      selectedTokenName={selectedTokenName}
      tokenNames={tokenNames}
      handleChangePrimaryTokens={handleChangePrimaryTokens}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      textConfig={textConfig}
      palette={palette}
      withSubmitButtons
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
    />
  );
}

export type { PrimaryFormProps };
export { PrimaryForm };
