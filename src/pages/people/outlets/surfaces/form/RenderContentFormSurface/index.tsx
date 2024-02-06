import { useContext, useState } from "react";
import { RenderSurfaceContentFormUI } from "./interface";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";

import { Appearance } from "@components/feedback/SendingInformation/types";
import { getTokenColor } from "@components/cards/TokenColorCard/styles";
import {
  surfaceFormsConfig,
  surfaceMessagesConfig,
} from "../../config/surface.config";
import { TokenContext } from "@context/TokenContext";

interface RenderSurfaceContentFormProps {
  formType: string;
  surfaceConfig: typeof surfaceFormsConfig;
}

function RenderSurfaceContentForm(props: RenderSurfaceContentFormProps) {
  const { formType, surfaceConfig } = props;
  const { token, handleSubmit } = useContext(TokenContext);
  const [surfaceToken, setSurfaceToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.surface }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const [toggleActive, setToggleActive] = useState(false);
  const [navLinkIsSelected, setNavLinkIsSelected] = useState(false);

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
  const updatedTheme = {
    ...token,
    color: {
      ...token.color,
      surface: surfaceToken,
    },
  };

  return (
    <RenderSurfaceContentFormUI
      formType={formType}
      handleCloseMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      handleTokenChange={handleTokenChange}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      surfaceConfig={surfaceConfig}
      updatedTheme={updatedTheme}
      toggleActive={toggleActive}
      setToggleActive={setToggleActive}
      navLinkIsSelected={navLinkIsSelected}
      setNavLinkIsSelected={setNavLinkIsSelected}
    />
  );
}

export { RenderSurfaceContentForm };
export type { RenderSurfaceContentFormProps };
