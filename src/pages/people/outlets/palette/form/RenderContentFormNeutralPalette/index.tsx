import { useContext, useState } from "react";
import { RenderContentFormNeutralPaletteUI } from "./interface";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";
import { paletteMessagesConfig } from "../../config/palette.config";
import { TokenContext } from "@src/context/TokenContext";

interface RenderContentFormNeutralPaletteProps {
  formType: string;
}

function RenderContentFormNeutralPalette(
  props: RenderContentFormNeutralPaletteProps
) {
  const { formType } = props;
  const { token, handleSubmit } = useContext(TokenContext);
  const [paletteToken, setPaletteToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.palette }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return JSON.stringify(token.color.palette) !== JSON.stringify(paletteToken);
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

  const handleReset = () => {
    setPaletteToken(JSON.parse(JSON.stringify({ ...token.color.palette })));
  };
  const updatedTheme = {
    ...token,
    color: {
      ...token.color,
      palette: paletteToken,
    },
  };

  return (
    <RenderContentFormNeutralPaletteUI
      formType={formType}
      handleColorChange={handleColorChange}
      categories={paletteToken}
      handleCloseMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      updatedTheme={updatedTheme}
    />
  );
}

export { RenderContentFormNeutralPalette };
export type { RenderContentFormNeutralPaletteProps };
