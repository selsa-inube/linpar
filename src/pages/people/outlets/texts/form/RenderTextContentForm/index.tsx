import { useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { IHandleSubmitProps } from "@src/routes/people";
import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";

interface RenderTextContentFormProps {
  tokens: typeof inube;
  formType: string;
  textConfig: any;
  handleSubmit: (props: IHandleSubmitProps) => void;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, handleSubmit, tokens, textConfig } = props;
  const [textTokens, setTextTokens] = useState(
    JSON.parse(JSON.stringify({ ...tokens }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = () => {
    return (
      JSON.stringify(tokens.color.text) !==
      JSON.stringify(textTokens.color.text)
    );
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let updatedTextTokens = { ...textTokens.color.text };

    updatedTextTokens[appearance][category] = getTokenColor(
      updatedTokenName,
      textTokens
    );

    const updatedTheme = {
      ...textTokens,
      color: {
        ...textTokens.color,
        text: updatedTextTokens,
      },
    };
    setTextTokens(updatedTheme);
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
            data: textMessagesConfig.success,
          });
          handleSubmit({
            domain: "color",
            block: "text",
            tokenUpdate: textTokens.color.text,
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

  const handleReset = () => {
    const originalTheme = {
      ...textTokens,
      color: {
        ...textTokens.color,
        text: JSON.parse(JSON.stringify({ ...tokens.color.text })),
      },
    };
    setTextTokens(originalTheme);
  };

  return (
    <RenderTextContentFormUI
      textTokens={textTokens}
      handleChangeTokens={handleTokenChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      textConfig={textConfig}
      palette={textTokens.color.palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderTextContentForm };
