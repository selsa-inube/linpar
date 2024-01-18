import { useState } from "react";
import { RenderLinesContentFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { IHandleSubmitProps } from "@src/routes/people";
import { linesMessagesConfig } from "../config/lines.config";

interface RenderLinesContentFormProps {
  tokens: typeof inube;
  formType: string;
  linesConfig: any;
  handleSubmit: (props: IHandleSubmitProps) => void;
}

function RenderLinesContentForm(props: RenderLinesContentFormProps) {
  const { formType, handleSubmit, tokens, linesConfig } = props;
  const [linesTokens, setLinesTokens] = useState(
    JSON.parse(JSON.stringify({ ...tokens }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = () => {
    return (
      JSON.stringify(tokens.color.stroke) !==
      JSON.stringify(linesTokens.color.stroke)
    );
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let linesTokensUpdate = { ...linesTokens.color.stroke };

    linesTokensUpdate[appearance][category] =
      tokens.color.palette.neutral[updatedTokenName];

    const updatedTheme = {
      ...linesTokens,
      color: {
        ...linesTokens.color,
        stroke: linesTokensUpdate,
      },
    };
    console.log("updatedTheme: ", updatedTheme);
    setLinesTokens(updatedTheme);
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
            data: linesMessagesConfig.success,
          });
          handleSubmit({
            domain: "color",
            block: "stroke",
            tokenUpdate: linesTokens.color.stroke,
          });
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: linesMessagesConfig.failed,
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
      ...linesTokens,
      color: {
        ...linesTokens.color,
        stroke: JSON.parse(JSON.stringify({ ...tokens.color.stroke })),
      },
    };
    setLinesTokens(originalTheme);
  };

  return (
    <RenderLinesContentFormUI
      linesTokens={linesTokens}
      handleChangeTokens={handleTokenChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      linesConfig={linesConfig}
      palette={linesTokens.color.palette}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderLinesContentForm };
