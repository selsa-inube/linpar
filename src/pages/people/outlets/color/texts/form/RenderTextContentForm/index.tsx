import { useContext, useEffect, useState } from "react";
import { RenderTextContentFormUI } from "./interface";
import {
  textFormsConfig,
  textMessagesConfig,
} from "@pages/people/outlets/color/texts/config/text.config";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { TextAppearance } from "@pages/people/outlets/color/texts/types";
import { inube } from "@inube/design-system";
import { TokenContext } from "@context/TokenContext";
import { tokenCalculator } from "@src/utils/tokenCalculator";
import { LoadingAppUI } from "@pages/login/outlets/LoadingApp/interface";

interface RenderTextContentFormProps {
  formType: TextAppearance;
  textConfig: typeof textFormsConfig;
}

function RenderTextContentForm(props: RenderTextContentFormProps) {
  const { formType, textConfig } = props;
  const { tokenWithRef, handleSubmit, loading } = useContext(TokenContext);
  const [textToken, setTextToken] = useState<typeof inube>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    if (!loading && tokenWithRef.color && tokenWithRef.color.stroke) {
      setTextToken(JSON.parse(JSON.stringify({ ...tokenWithRef.color.text })));
    }
  }, [loading, tokenWithRef]);

  if (Object.keys(textToken).length === 0 && textToken.constructor === Object) {
    return <LoadingAppUI />;
  }

  const hasChanges = (): boolean => {
    return (
      JSON.stringify(tokenWithRef.color.text) !== JSON.stringify(textToken)
    );
  };

  const handleTokenChange = (
    appearance: TextAppearance,
    category: string,
    updatedTokenName: string
  ) => {
    let updatedTextTokens = { ...textToken };
    updatedTextTokens[appearance][category] = updatedTokenName;
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
    setTextToken(JSON.parse(JSON.stringify({ ...tokenWithRef.color.text })));
  };
  const updatedTokens = {
    ...tokenWithRef,
    color: {
      ...tokenWithRef.color,
      text: textToken,
    },
  };
  const updatedTheme = tokenCalculator(updatedTokens);

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
      textToken={textToken}
    />
  );
}

export { RenderTextContentForm };
export type { RenderTextContentFormProps };
