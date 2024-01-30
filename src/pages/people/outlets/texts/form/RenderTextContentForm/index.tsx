import { useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { textFormsConfig, textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";

interface RenderTextContentFormProps {
  formType: string;
  handleSubmit: (
    domain: string,
    block: string,
    tokenUpdate: typeof inube
  ) => void;
  textConfig: typeof textFormsConfig;
  token: typeof inube;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, handleSubmit, token, textConfig } = props;
  const [textToken, setTextToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.text }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  const hasChanges = (): boolean => {
    return JSON.stringify(token.color.text) !== JSON.stringify(textToken);
  };

  const handleTokenChange = (
    appearance: Appearance | string,
    category: string,
    updatedTokenName: string
  ) => {
    let updatedTextTokens = { ...textToken };
    updatedTextTokens[appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

    setTextToken(updatedTextTokens);
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
          handleSubmit("color", "text", textToken);
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
    setTextToken(JSON.parse(JSON.stringify({ ...token.color.text })));
  };
  const updatedTheme = {
    ...token,
    color: {
      ...token.color,
      text: textToken,
    },
  };
  return (
    <RenderTextContentFormUI
      formType={formType}
      handleCloseMessage={handleCloseSectionMessage}
      handleReset={handleReset}
      handleSubmitForm={handleSubmitForm}
      handleTokenChange={handleTokenChange}
      hasChanges={hasChanges}
      isLoading={isLoading}
      message={message}
      textConfig={textConfig}
      updatedTheme={updatedTheme}
      toggleActive={toggleActive}
      setToggleActive={setToggleActive}
    />
  );
}

export { RenderTextContentForm };
export type { RenderTextContentFormProps };
