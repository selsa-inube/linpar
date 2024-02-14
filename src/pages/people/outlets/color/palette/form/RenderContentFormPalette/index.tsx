import { useContext, useEffect, useState } from "react";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";
import { paletteMessagesConfig } from "../../config/palette.config";
import { RenderContentFormPaletteUI } from "./interface";
import { TokenContext } from "@context/TokenContext";
import { LoadingAppUI } from "@src/pages/login/outlets/LoadingApp/interface";
import { PaletteAppearance } from "../../types";

interface RenderContentFormPaletteProps {
  formType: PaletteAppearance;
}

function RenderContentFormPalette(props: RenderContentFormPaletteProps) {
  const { formType } = props;
  const { token, handleSubmit, loading } = useContext(TokenContext);
  const [paletteToken, setPaletteToken] = useState({});
  const [isLoadingFormButtons, setIsLoadingLoadingFormButtons] =
    useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  useEffect(() => {
    if (!loading && token.color && token.color.palette) {
      setPaletteToken(JSON.parse(JSON.stringify({ ...token.color.palette })));
    }
  }, [loading, token]);

  if (
    Object.keys(paletteToken).length === 0 &&
    paletteToken.constructor === Object
  ) {
    return <LoadingAppUI />;
  }

  const hasChanges = (): boolean => {
    return JSON.stringify(token.color.palette) !== JSON.stringify(paletteToken);
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
    setIsLoadingLoadingFormButtons(true);
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
        setIsLoadingLoadingFormButtons(false);
      });
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
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
    <RenderContentFormPaletteUI
      categories={paletteToken}
      formType={formType}
      handleCloseMessage={handleCloseSectionMessage}
      handleColorChange={handleColorChange}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      hasChanges={hasChanges}
      isLoading={isLoadingFormButtons}
      message={message}
      updatedTheme={updatedTheme}
    />
  );
}

export { RenderContentFormPalette };
export type { RenderContentFormPaletteProps };
