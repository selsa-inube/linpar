import { useState } from "react";
import { RenderContentFormUI } from "./interface";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { inube } from "@inube/design-system";
import { surfaceMessagesConfig } from "../../config/surface.config";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

interface RenderContentFormProps {
  surfaceTokens: typeof inube;
  formType: string;
  surfaceConfig: any;
  palette: typeof inube;
}

function RenderContentForm(props: RenderContentFormProps) {
  const { formType, surfaceTokens, surfaceConfig, palette } = props;
  const [isLoading, setIsLoading] = useState(false);

  const [updateSurfaceTokens, setUpdateSurfaceTokens] = useState(surfaceTokens);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return false;
    // return (
    //   JSON.stringify(initialStateTextTokens.text) !==
    //   JSON.stringify(textTokens.text)
    // );
  };

  const handleTextConfigUpdate = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    const updatedSurfaceConfig = { ...surfaceConfig.text };

    if (
      updatedSurfaceConfig[appearance] &&
      updatedSurfaceConfig[appearance][category]
    ) {
      updatedSurfaceConfig[appearance][category] =
        getTokenColor(updatedTokenName);
    }
    const updatedInubeColor = {
      ...inube.color,
      text: { ...updatedSurfaceConfig },
    };

    setUpdateSurfaceTokens(updatedInubeColor);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          setUpdateSurfaceTokens(updateSurfaceTokens.text);
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
  return (
    <RenderContentFormUI
      handleChangePrimaryTokens={handleTextConfigUpdate}
      handleSubmitForm={handleSubmitForm}
      handleReset={() => {
        setUpdateSurfaceTokens(surfaceTokens);
      }}
      isLoading={isLoading}
      surfaceConfig={surfaceConfig}
      palette={palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
      surfaceTokens={undefined}
    />
  );
}

export { RenderContentForm };
function getTokenColor(updatedTokenName: string): any {
  throw new Error("Function not implemented.");
}
