import { useContext, useEffect, useState } from "react";
import { inube } from "@inube/design-system";
import { PaletteUI } from "./interface";
import { paletteMessagesConfig } from "./config/palette.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { TokenContext } from "@src/context/TokenContext";

function Palette() {
  const { token, handleSubmit } = useContext(TokenContext);
  const [isLoading, setIsLoading] = useState(false);
  const [colorTokens, setColorTokens] = useState(
    JSON.parse(JSON.stringify({ ...token.color.palette }))
  );
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const handleColorChange = (
    tokenName: string,
    newColor: string | undefined
  ) => {
    setColorTokens((prevTokens: typeof inube) => {
      const newTokens = { ...prevTokens };
      for (const category in newTokens) {
        if (newTokens[category][tokenName]) {
          newTokens[category][tokenName] = newColor;
          break;
        }
      }
      return newTokens;
    });
  };

  useEffect(() => {
    const handleBeforeUnload = () => {
      sessionStorage.clear();
    };
    window.addEventListener("beforeunload", handleBeforeUnload);
    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  const hasChanges = () => {
    return JSON.stringify(token.color.palette) !== JSON.stringify(colorTokens);
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  const onMessageClosed = () => {
    setColorTokens(JSON.parse(JSON.stringify({ ...token.color.palette })));
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
            data: paletteMessagesConfig.success,
          });
          handleSubmit("color", "palette", colorTokens);
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: paletteMessagesConfig.failed,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <PaletteUI
      colorTokens={colorTokens}
      setColorTokens={handleColorChange}
      handleSubmitForm={handleSubmitForm}
      isLoading={isLoading}
      message={message}
      hasChanges={hasChanges}
      handleReset={onMessageClosed}
      handleCloseMessage={handleCloseSectionMessage}
      onMessageClosed={onMessageClosed}
      originalTokens={{ ...token }}
    />
  );
}

export { Palette };
