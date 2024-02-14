import { useContext, useState } from "react";
import { Appearance } from "@components/cards/FieldsetColorCard/types";
import { IPeopleMessage } from "@pages/people/outlets/types/people.types";
import { RenderStrokesContentFormUI } from "./interface";
import {
  strokesMessagesConfig,
  strokesFormsConfig,
} from "../../config/Strokes.config";
import { TokenContext } from "@context/TokenContext";
import { tokenCalculator } from "@src/utilities/tokenCalculator";

interface RenderStrokesContentFormProps {
  formType: string;
  strokesConfig: typeof strokesFormsConfig;
}

function RenderStrokesContentForm(props: RenderStrokesContentFormProps) {
  const { formType, strokesConfig } = props;
  const { tokenWithRef, handleSubmit } = useContext(TokenContext);
  const [strokesToken, setStrokesToken] = useState(
    JSON.parse(JSON.stringify({ ...tokenWithRef.color.stroke }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IPeopleMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  const hasChanges = () => {
    return (
      JSON.stringify(tokenWithRef.color.stroke) !== JSON.stringify(strokesToken)
    );
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let strokesUpdate = { ...strokesToken };
    strokesUpdate[appearance][category] = updatedTokenName;
    setStrokesToken(strokesUpdate);
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
            data: strokesMessagesConfig.success,
          });
          handleSubmit({
            domain: "color",
            block: "stroke",
            tokenUpdate: strokesToken,
          });
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: strokesMessagesConfig.failed,
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
    setStrokesToken(
      JSON.parse(JSON.stringify({ ...tokenWithRef.color.stroke }))
    );
  };

  const updatedTokens = {
    ...tokenWithRef,
    color: {
      ...tokenWithRef.color,
      stroke: strokesToken,
    },
  };
  const updatedTheme = tokenCalculator(updatedTokens);

  return (
    <RenderStrokesContentFormUI
      formType={formType}
      handleReset={handleReset}
      handleCloseMessage={handleCloseSectionMessage}
      handleSubmitForm={handleSubmitForm}
      handleTokenChange={handleTokenChange}
      hasChanges={hasChanges}
      isLoading={isLoading}
      strokesConfig={strokesConfig}
      message={message}
      updatedTheme={updatedTheme}
      toggleActive={toggleActive}
      setToggleActive={setToggleActive}
      strokesToken={strokesToken}
    />
  );
}

export { RenderStrokesContentForm };
export type { RenderStrokesContentFormProps };
