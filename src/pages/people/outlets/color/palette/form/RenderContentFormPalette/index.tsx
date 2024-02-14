import { useContext, useState } from "react";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";
import { paletteMessagesConfig } from "../../config/palette.config";
import { RenderContentFormPaletteUI } from "./interface";
import { TokenContext } from "@context/TokenContext";

interface RenderContentFormPaletteProps {
  formType: string;
}

function RenderContentFormPalette(props: RenderContentFormPaletteProps) {
  const { formType } = props;
  const { tokenWithRef, handleSubmit } = useContext(TokenContext);
  const [paletteToken, setPaletteToken] = useState(
    JSON.parse(JSON.stringify({ ...tokenWithRef.color.palette }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return (
      JSON.stringify(tokenWithRef.color.palette) !==
      JSON.stringify(paletteToken)
    );
  };

  const handleColorChange = (
    tokenName: string,
    newColor: string | undefined
  ) => {
    setPaletteToken((prevTokens: typeof inube) => {
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
          handleSubmit({
            domain: "color",
            block: "palette",
            tokenUpdate: paletteToken,
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

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
  };

  const handleReset = () => {
    setPaletteToken(
      JSON.parse(JSON.stringify({ ...tokenWithRef.color.palette }))
    );
  };
  const updatedTheme = {
    ...tokenWithRef,
    color: {
      ...tokenWithRef.color,
      palette: paletteToken,
    },
  };

  return (
    <RenderContentFormPaletteUI
      categories={paletteToken}
      formType={formType}
      handleCloseMessage={handleCloseSectionMessage}
      handleColorChange={handleColorChange}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      updatedTheme={updatedTheme}
    />
  );
}

export { RenderContentFormPalette };
export type { RenderContentFormPaletteProps };
