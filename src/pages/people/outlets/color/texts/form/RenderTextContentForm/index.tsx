import { useContext, useEffect, useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import { textFormsConfig, textMessagesConfig } from "../../config/text.config";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { getTokenColor } from "@components/cards/TokenColorCard/styles";
import { TokenContext } from "@context/TokenContext";
import { LoadingAppUI } from "@pages/login/outlets/LoadingApp/interface";
import { TextAppearance } from "../../types";
import { inube } from "@inube/design-system";

interface RenderTextContentFormProps {
  formType: TextAppearance;
  textConfig: typeof textFormsConfig;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, textConfig } = props;
  const { token, handleSubmit, loading } = useContext(TokenContext);
  const [textToken, setTextToken] = useState<typeof inube>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    if (!loading && token.color && token.color.stroke) {
      setTextToken(JSON.parse(JSON.stringify({ ...token.color.text })));
    }
  }, [loading, token]);

  if (Object.keys(textToken).length === 0 && textToken.constructor === Object) {
    return <LoadingAppUI />;
  }

  const hasChanges = (): boolean => {
    return JSON.stringify(token.color.text) !== JSON.stringify(textToken);
  };

  const handleTokenChange = (
    appearance: TextAppearance,
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
