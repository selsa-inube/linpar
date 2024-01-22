import { useState } from "react";
import { RenderLinesContentFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";
import { Appearance } from "@src/components/cards/FieldsetColorCard/types";
import { IHandleSubmitProps } from "@src/routes/people";
import { linesMessagesConfig } from "../config/lines.config";
import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";

interface RenderLinesContentFormProps {
  formType: string;
  handleSubmit: (props: IHandleSubmitProps) => void;
  linesConfig: any;
  token: typeof inube;
}

function RenderLinesContentForm(props: RenderLinesContentFormProps) {
  const { formType, handleSubmit, linesConfig, token } = props;
  const [linesToken, setLinesToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.stroke }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });

  const hasChanges = () => {
    return JSON.stringify(token.color.stroke) !== JSON.stringify(linesToken);
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let lineStokenUpdate = { ...linesToken };

    lineStokenUpdate[appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

    setLinesToken(lineStokenUpdate);
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
            tokenUpdate: linesToken,
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
    setLinesToken(JSON.parse(JSON.stringify({ ...token.color.stroke })));
  };

  const updatedTheme = {
    ...token,
    color: {
      ...token.color,
      stroke: linesToken,
    },
  };

  console.log("updatedTheme: ", updatedTheme);

  return (
    <RenderLinesContentFormUI
      updatedTheme={updatedTheme}
      handleTokenChange={handleTokenChange}
      handleSubmitForm={handleSubmitForm}
      handleReset={handleReset}
      isLoading={isLoading}
      linesConfig={linesConfig}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
      formType={formType}
    />
  );
}

export { RenderLinesContentForm };
