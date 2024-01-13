import { useState } from "react";
import { GrayFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { textMessagesConfig } from "../../config/text.config";
import { useNavigate } from "react-router-dom";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

const LOADING_TIMEOUT = 1500;

interface GrayFormProps {
  textConfig: any;
  palette: typeof inube;
  originalTextConfig: typeof inube;
  textTokens: typeof inube;
  onChange: (event: any) => void;
}

function GrayForm(props: GrayFormProps) {
  const { textTokens, originalTextConfig, textConfig, palette, onChange } =
    props;
  const [grayText, setGrayText] = useState(textConfig);
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
    <GrayFormUI
      handleChangeGray={onChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={onMessageClosed}
      isLoading={isLoading}
      palette={palette}
      textConfig={textConfig}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      onMessageClosed={onMessageClosed}
    />
  );
}

export type { GrayFormProps };
export { GrayForm };
