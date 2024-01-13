import { useState } from "react";
import { ErrorFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { EMessageType } from "@src/types/messages.types";
import {
  IAssignmentFormEntry,
  IMessageState,
} from "@src/pages/privileges/outlets/users/types/forms.types";
import { useNavigate } from "react-router-dom";
import { textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

const LOADING_TIMEOUT = 1500;

interface ErrorTokensFormProps {
  originalTextConfig: typeof inube;
  textTokens: typeof inube;
  textConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
}

function ErrorForm(props: ErrorTokensFormProps) {
  const { textTokens, originalTextConfig, textConfig, palette, onChange } =
    props;
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const navigate = useNavigate();

  const hasChanges = (): boolean => {
    return (
      JSON.stringify(originalTextConfig.text) !==
      JSON.stringify(textTokens.text)
    );
  };

  const onMessageClosed = () => {
    navigate(-1);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          originalTextConfig.text = textTokens.text;
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
    <ErrorFormUI
      textConfig={textConfig}
      handleChangeErrorTokens={onChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={onMessageClosed}
      isLoading={isLoading}
      palette={palette}
      message={message}
      onCloseSectionMessage={handleCloseSectionMessage}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      onMessageClosed={onMessageClosed}
    />
  );
}

export type { ErrorTokensFormProps };
export { ErrorForm };
