import { useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { getTokenColor } from "@src/components/cards/FieldsetColorCard/styles";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

interface RenderTextContentFormProps {
  textTokens: typeof inube;
  formType: string;
  textConfig: any;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, textTokens, textConfig } = props;
  const [isLoading, setIsLoading] = useState(false);
  const [updateTokens, setUpdateTokens] = useState(textTokens);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = (): boolean => {
    return (
      JSON.stringify(updateTokens.color.text) !==
      JSON.stringify(textTokens.color.text)
    );
  };

  const handleTextConfigUpdate = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    const updatedTextConfig = { ...textTokens.color.text };

    if (
      updatedTextConfig[appearance] &&
      updatedTextConfig[appearance][category]
    ) {
      updatedTextConfig[appearance][category] = getTokenColor(updatedTokenName);
    }

    const updatedTheme = {
      ...textTokens,
      color: {
        ...textTokens.color,
        text: updatedTextConfig,
      },
    };
    // console.log(
    //   "textTokens: ",
    //   textTokens,'   Theme: ',
    //   updatedTheme
    // );
    setUpdateTokens(updatedTheme);
  };

  const handleSubmitForm = () => {
    setIsLoading(true);
    new Promise((resolve, reject) => {
      setTimeout(() => {
        const isSuccess = true;
        if (isSuccess) {
          // setUpdateTextTokens(updateTextTokens.text);
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
    <RenderTextContentFormUI
      textTokens={updateTokens}
      handleChangePrimaryTokens={handleTextConfigUpdate}
      handleSubmitForm={handleSubmitForm}
      handleReset={() => {
        setUpdateTokens(textTokens);
      }}
      isLoading={isLoading}
      textConfig={textConfig}
      palette={updateTokens.color.palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderTextContentForm };
