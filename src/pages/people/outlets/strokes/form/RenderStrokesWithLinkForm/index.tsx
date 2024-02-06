import { useState } from "react";
import { RenderStrokesWithLinkFormUI } from "./interface";
import { inube } from "@inube/design-system";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { IHandleSubmitProps } from "@src/routes/people";
import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";
import { IPeopleMessage } from "@src/pages/people/outlets/types/people.types";
import {
  strokesMessagesConfig,
  strokesFormsConfig,
} from "../../config/Strokes.config";

interface RenderStrokesWithLinkFormProps {
  formType: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  strokesConfig: typeof strokesFormsConfig;
  token: typeof inube;
}

function RenderStrokesWithLinkForm(props: RenderStrokesWithLinkFormProps) {
  const { formType, handleSubmit, strokesConfig, token } = props;
  const [strokesToken, setStrokesToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.stroke }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IPeopleMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  const hasChanges = () => {
    return JSON.stringify(token.color.stroke) !== JSON.stringify(strokesToken);
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let strokesUpdate = { ...strokesToken };

    strokesUpdate[appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

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
    setStrokesToken(JSON.parse(JSON.stringify({ ...token.color.stroke })));
  };

  const updatedTheme = {
    ...token,
    color: {
      ...token.color,
      stroke: strokesToken,
    },
  };

  return (
    <RenderStrokesWithLinkFormUI
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
    />
  );
}

export { RenderStrokesWithLinkForm };
export type { RenderStrokesWithLinkFormProps };
