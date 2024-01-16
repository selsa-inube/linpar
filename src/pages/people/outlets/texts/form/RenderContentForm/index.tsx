import { useState } from "react";
import { RenderContentFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

interface RenderContentFormProps {
  textTokens: typeof inube;
  formType: string;
  textConfig: any;
  palette: typeof inube;
}

function RenderContentForm(props: RenderContentFormProps) {
  const { formType, textTokens, textConfig, palette } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [updatetextTokens, setUpdateTextTokens] = useState(textTokens);
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
    console.log("updatedTokenName: ", updatedTokenName);
    const updatedTextConfig = { ...textConfig.text };

    if (
      updatedTextConfig[appearance] &&
      updatedTextConfig[appearance][category]
    ) {
      updatedTextConfig[appearance][category] = getTokenColor(updatedTokenName);
    }
    const updatedInubeColor = {
      ...inube.color,
      text: { ...updatedTextConfig },
    };

    setUpdateTextTokens(updatedInubeColor);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          setUpdateTextTokens(updatetextTokens.text);
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
            data: textMessagesConfig.success,
          });
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: textMessagesConfig.failed,
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
      textTokens={textTokens}
      handleChangePrimaryTokens={handleTextConfigUpdate}
      handleSubmitForm={handleSubmitForm}
      handleReset={() => {
        setUpdateTextTokens(textTokens);
      }}
      isLoading={isLoading}
      textConfig={textConfig}
      palette={palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderContentForm };
