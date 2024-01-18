import { useState } from "react";
import { RenderSurfaceContentFormUI } from "./interface";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";
import { surfaceMessagesConfig } from "../../config/surface.config";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";
import { IHandleSubmitProps } from "@src/routes/people";
import { Appearance } from "@src/components/feedback/SendingInformation/types";

interface RenderSurfaceContentFormProps {
  tokens: typeof inube;
  formType: Appearance;
  surfaceConfig: any;
  handleSubmit: (props: IHandleSubmitProps) => void;
}

function RenderSurfaceContentForm(props: RenderSurfaceContentFormProps) {
  const { formType, handleSubmit, tokens, surfaceConfig } = props;
  const [surfaceTokens, setSurfaceTokens] = useState(
    JSON.parse(JSON.stringify({ ...tokens }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return (
      JSON.stringify(tokens.color.surface) !==
      JSON.stringify(surfaceTokens.color.surface)
    );
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let updatedSurfaceTokens = { ...surfaceTokens.color.surface };
    updatedSurfaceTokens[appearance][category] = getTokenColor(
      updatedTokenName,
      surfaceTokens
    );

    const updatedTheme = {
      ...surfaceTokens,
      color: {
        ...surfaceTokens.color,
        surface: updatedSurfaceTokens,
      },
    };
    setSurfaceTokens(updatedTheme);
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
            tokenUpdate: surfaceTokens.color.surface,
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
    const originalTheme = {
      ...surfaceTokens,
      color: {
        ...surfaceTokens.color,
        surface: JSON.parse(JSON.stringify({ ...tokens.color.surface })),
      },
    };
    setSurfaceTokens(originalTheme);
  };

  return (
    <RenderSurfaceContentFormUI
      surfaceTokens={surfaceTokens}
      handleChangeTokens={handleTokenChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      surfaceConfig={surfaceConfig}
      palette={surfaceTokens.color.palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderSurfaceContentForm };
