import { useContext, useEffect, useState } from "react";

import { IPeopleMessage } from "@pages/people/outlets/types/people.types";
import {
  strokesMessagesConfig,
  strokesFormsConfig,
} from "@pages/people/outlets/color/strokes/config/Strokes.config";
import { TokenContext } from "@context/TokenContext";
import { tokenCalculator } from "@src/utils/tokenCalculator";
import { LoadingAppUI } from "@pages/login/outlets/LoadingApp/interface";
import { StrokeAppearance } from "@pages/people/outlets/color/strokes/types";
import { inube } from "@inube/design-system";

import { RenderStrokesWithSpinnerFormUI } from "./interface";

interface RenderStrokesWithSpinnerFormProps {
  formType: StrokeAppearance;
  strokesConfig: typeof strokesFormsConfig;
}

function RenderStrokesWithSpinnerForm(
  props: RenderStrokesWithSpinnerFormProps
) {
  const { formType, strokesConfig } = props;
  const { tokenWithRef, handleSubmit, loading } = useContext(TokenContext);
  const [strokesToken, setStrokesToken] = useState<typeof inube>({});
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IPeopleMessage>({
    visible: false,
  });

  const [toggleActive, setToggleActive] = useState(false);

  useEffect(() => {
    if (!loading && tokenWithRef.color && tokenWithRef.color.stroke) {
      setStrokesToken(
        JSON.parse(JSON.stringify({ ...tokenWithRef.color.stroke }))
      );
    }
  }, [loading, tokenWithRef]);

  if (
    Object.keys(strokesToken).length === 0 &&
    strokesToken.constructor === Object
  ) {
    return <LoadingAppUI />;
  }

  const hasChanges = () => {
    return (
      JSON.stringify(tokenWithRef.color.stroke) !== JSON.stringify(strokesToken)
    );
  };

  const handleTokenChange = (
    appearance: StrokeAppearance,
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
      strokesToken={strokesToken}
    />
  );
}

export { RenderStrokesWithSpinnerForm };
export type { RenderStrokesWithSpinnerFormProps };
