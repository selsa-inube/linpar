import { useState } from "react";
import { PrimaryFormUI } from "./interface";
import { useNavigate } from "react-router-dom";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";
import { surfaceMessagesConfig } from "../../config/surface.config";

const LOADING_TIMEOUT = 1500;

interface PrimaryFormProps {
  surfaceConfig: any;
  palette: typeof inube;
  onChange: (event: any) => void;
  originalTextConfig: typeof inube;
  textTokens: typeof inube;
}

function PrimaryForm(props: PrimaryFormProps) {
  const { textTokens, originalTextConfig, surfaceConfig, palette, onChange } =
    props;
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const navigate = useNavigate();

  const hasChanges = (): boolean => {
    return (
      JSON.stringify(originalTextConfig.surface) !==
      JSON.stringify(textTokens.surface)
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
          originalTextConfig.surface = textTokens.surface;
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
            data: surfaceMessagesConfig.success,
          });
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: surfaceMessagesConfig.failed,
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
      surfaceConfig={surfaceConfig}
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
