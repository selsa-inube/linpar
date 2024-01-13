import { useState } from "react";
import { PrimaryFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { useNavigate } from "react-router-dom";
import { textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

interface PrimaryFormProps {
  textConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
  originalTextConfig: typeof inube;
  textTokens: typeof inube;
}

function PrimaryForm(props: PrimaryFormProps) {
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
    <PrimaryFormUI
      handleChangePrimaryTokens={onChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={onMessageClosed}
      isLoading={isLoading}
      textConfig={textConfig}
      palette={palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      onMessageClosed={onMessageClosed}
    />
  );
}

export type { PrimaryFormProps };
export { PrimaryForm };
