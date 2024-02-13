import { useContext, useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import { textFormsConfig, textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { Appearance } from "@components/cards/FieldsetColorCard/types";
import { getTokenColor } from "@components/cards/TokenColorCard/styles";
import { TokenContext } from "@context/TokenContext";

interface RenderTextContentFormProps {
  formType: string;
  textConfig: typeof textFormsConfig;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, textConfig } = props;
  const { token, handleSubmit } = useContext(TokenContext);
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
          handleSubmit({
            domain: "color",
            block: "text",
            tokenUpdate: textToken,
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
