import { useContext, useEffect, useState } from "react";
import { RenderStrokesWithSpinnerFormUI } from "./interface";
import { getTokenColor } from "@components/cards/TokenColorCard/styles";

import {
  strokesMessagesConfig,
  strokesFormsConfig,
} from "../../config/Strokes.config";
import { TokenContext } from "@context/TokenContext";
import { IPeopleMessage } from "@pages/people/outlets/types/people.types";
import { LoadingAppUI } from "@pages/login/outlets/LoadingApp/interface";
import { StrokeAppearance } from "../../types";
import { TextAppearance } from "../../../texts/types";
import { inube } from "@inube/design-system";

interface RenderStrokesWithSpinnerFormProps {
  formType: StrokeAppearance;
  strokesConfig: typeof strokesFormsConfig;
}

function RenderStrokesWithSpinnerForm(
  props: RenderStrokesWithSpinnerFormProps
) {
  const { formType, strokesConfig } = props;
  const { token, handleSubmit, loading } = useContext(TokenContext);
  const [strokesToken, setStrokesToken] = useState<typeof inube>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IPeopleMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    if (!loading && token.color && token.color.stroke) {
      setStrokesToken(JSON.parse(JSON.stringify({ ...token.color.stroke })));
    }
  }, [loading, token]);

  if (
    Object.keys(strokesToken).length === 0 &&
    strokesToken.constructor === Object
  ) {
    return <LoadingAppUI />;
  }

  const hasChanges = () => {
    return JSON.stringify(token.color.stroke) !== JSON.stringify(strokesToken);
  };

  const handleTokenChange = (
    appearance: TextAppearance,
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
    <RenderStrokesWithSpinnerFormUI
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

export { RenderStrokesWithSpinnerForm };
export type { RenderStrokesWithSpinnerFormProps };
