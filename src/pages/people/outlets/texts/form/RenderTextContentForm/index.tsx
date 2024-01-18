import { useEffect, useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

interface RenderTextContentFormProps {
  textTokens: typeof inube;
  formType: string;
  textConfig: any;
  handleTokenChange: (
    domain: string,
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => void;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, handleTokenChange, textTokens, textConfig } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const [previousTextTokens, setPreviousTextTokens] = useState(textTokens);

  useEffect(() => {
    setPreviousTextTokens(JSON.stringify(textTokens.color.text));
  }, [textTokens.color.text]);

  const hasChanges = () => {
    return JSON.stringify(textTokens.color.text) !== previousTextTokens;
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          resolve("success");
        } else {
          reject("failed");
        }
      }, 2000);
    })
      .then((result) => {
        if (result === "success") {
          setMessage({
            visible: true,
            data: textMessagesConfig.success,
          });
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: textMessagesConfig.failed,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  return (
    <RenderTextContentFormUI
      textTokens={textTokens}
      handleChangeTokens={handleTokenChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={() => {}}
      isLoading={isLoading}
      textConfig={textConfig}
      palette={textTokens.color.palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderTextContentForm };
