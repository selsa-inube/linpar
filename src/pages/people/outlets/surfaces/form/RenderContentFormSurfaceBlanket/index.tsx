import { useState } from "react";
import { RenderContentFormSurfaceBlanketUI } from "./interface";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";

import { IHandleSubmitProps } from "@src/routes/people";
import { Appearance } from "@src/components/feedback/SendingInformation/types";
import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";
import {
  surfaceFormsConfig,
  surfaceMessagesConfig,
} from "../../config/surface.config";

interface RenderContentFormSurfaceBlanketProps {
  formType: Appearance;
  handleSubmit: (props: IHandleSubmitProps) => void;
  surfaceConfig: typeof surfaceFormsConfig;
  token: typeof inube;
}

function RenderContentFormSurfaceBlanket(
  props: RenderContentFormSurfaceBlanketProps
) {
  const { formType, handleSubmit, surfaceConfig, token } = props;
  const [surfaceToken, setSurfaceToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.surface }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [showBlanket, setShowBlanket] = useState(false);
  const [toggleActive, setToggleActive] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return JSON.stringify(token.color.surface) !== JSON.stringify(surfaceToken);
  };

  const handleTokenChange = (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => {
    let updatedSurfaceTokens = { ...surfaceToken };
    updatedSurfaceTokens[appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

    setSurfaceToken(updatedSurfaceTokens);
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
            data: surfaceMessagesConfig.success,
          });
          handleSubmit({
            domain: "color",
            block: "surface",
            tokenUpdate: surfaceToken,
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

  const handleReset = () => {
    setSurfaceToken(JSON.parse(JSON.stringify({ ...token.color.surface })));
  };

  const handleShowBlanket = () => {
    setShowBlanket(!showBlanket);
  };

  const updatedTheme = {
    ...token,
    color: {
      ...token.color,
      surface: surfaceToken,
    },
  };

  return (
    <RenderContentFormSurfaceBlanketUI
      formType={formType}
      handleCloseMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      handleShowBlanket={handleShowBlanket}
      handleTokenChange={handleTokenChange}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      showBlanket={showBlanket}
      surfaceConfig={surfaceConfig}
      toggleActive={toggleActive}
      setToggleActive={setToggleActive}
      updatedTheme={updatedTheme}
    />
  );
}

export { RenderContentFormSurfaceBlanket };
export type { RenderContentFormSurfaceBlanketProps };
