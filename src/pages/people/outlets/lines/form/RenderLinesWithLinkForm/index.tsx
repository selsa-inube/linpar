import { useState } from "react";
import { RenderLinesWithLinkFormUI } from "./interface";
import { inube } from "@inube/design-system";

import { Appearance } from "@src/components/cards/FieldsetColorCard/types";

import { getTokenColor } from "@src/components/cards/TokenColorCard/styles";
import {
  linesFormsConfig,
  linesMessagesConfig,
} from "../../config/lines.config";
import { IPeopleMessage } from "../../../types/people.types";

interface RenderLinesWithLinkFormProps {
  formType: string;
  handleSubmit: (
    domain: string,
    block: string,
    tokenUpdate: typeof inube
  ) => void;
  linesConfig: typeof linesFormsConfig;
  token: typeof inube;
}

function RenderLinesWithLinkForm(props: RenderLinesWithLinkFormProps) {
  const { formType, handleSubmit, linesConfig, token } = props;
  const [linesToken, setLinesToken] = useState(
    JSON.parse(JSON.stringify({ ...token.color.stroke }))
  );
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IPeopleMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  const hasChanges = () => {
    return JSON.stringify(token.color.stroke) !== JSON.stringify(linesToken);
  };

  const handleTokenChange = (
    appearance: Appearance,
    category: string,
    updatedTokenName: string
  ) => {
    let lineStokeUpdate = { ...linesToken };

    lineStokeUpdate[appearance][category] = getTokenColor(
      updatedTokenName,
      token
    );

    setLinesToken(lineStokeUpdate);
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
          handleSubmit("color", "stroke", linesToken);
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

  return (
    <RenderLinesWithLinkFormUI
      formType={formType}
      handleReset={handleReset}
      handleCloseMessage={handleCloseSectionMessage}
      handleSubmitForm={handleSubmitForm}
      handleTokenChange={handleTokenChange}
      hasChanges={hasChanges}
      isLoading={isLoading}
      linesConfig={linesConfig}
      message={message}
      updatedTheme={updatedTheme}
      toggleActive={toggleActive}
      setToggleActive={setToggleActive}
    />
  );
}

export { RenderLinesWithLinkForm };
export type { RenderLinesWithLinkFormProps };
