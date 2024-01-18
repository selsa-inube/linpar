import { useEffect, useState } from "react";
import { inube } from "@inube/design-system";
import { PaletteUI } from "./interface";
import { paletteMessagesConfig } from "./config/palette.config";
import { useNavigate } from "react-router-dom";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

function Palette(props) {
  const [isLoading, setIsLoading] = useState(false);
  const [colorTokens, setColorTokens] = useState({
    ...props.token.color.palette,
  });
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

  const navigate = useNavigate();

  const hasChanges = (valueToCompare: typeof inube) => {
    return (
      JSON.stringify(inube.color.palette) === JSON.stringify(valueToCompare)
    );
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
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
    <>
      {console.log(props.token)}
      {console.log(inube)}
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
        originalTokens={props.token}
      />
    </>
  );
}

export { Palette };
