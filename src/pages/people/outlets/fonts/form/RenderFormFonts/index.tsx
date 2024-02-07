import { fontMessagesConfig } from "../../config/fonts.config";
import { RenderFontContentFormUI } from "./interface";
import { useContext, useState } from "react";
import { TokenContext } from "@context/TokenContext";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";

function RenderFormFonts() {
  const { token, handleSubmit } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);

  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return true;
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
            data: fontMessagesConfig.success,
          });
          handleSubmit({
            domain: "typography",
            block: "fonts",
            tokenUpdate: token,
          });
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: fontMessagesConfig.failed,
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

  const handleReset = () => {};
  const updatedTheme = {
    ...inube,
  };

  return (
    <RenderFontContentFormUI
      handleCloseSectionMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      handleTokenChange={() => {}}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      updatedTheme={updatedTheme}
    />
  );
}

export { RenderFormFonts };
