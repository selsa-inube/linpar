import { useState } from "react";
import { RenderContentFormPaletteUI } from "./interface";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";

import { IHandleSubmitProps } from "@src/routes/people";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";
import { paletteMessagesConfig } from "../../config/palette.config";

interface RenderContentFormPaletteProps {
  formType: Appearance;
  categories: string[];
  handleSubmit: (props: IHandleSubmitProps) => void;
  token: typeof inube;
}

function RenderContentFormPalette(props: RenderContentFormPaletteProps) {
  const { formType, categories, handleSubmit, token } = props;
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

  const handleTokenChange = (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => {
    let updatedPaletteTokens = { ...paletteToken };
    updatedPaletteTokens[appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

    setPaletteToken(updatedPaletteTokens);
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
      formType={formType}
      categories={categories}
      handleCloseMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      handleTokenChange={handleTokenChange}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      updatedTheme={updatedTheme} setColorTokens={undefined}    />
  );
}

export { RenderContentFormPalette };
export type { RenderContentFormPaletteProps };
