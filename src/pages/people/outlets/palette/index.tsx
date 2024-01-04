import { useState } from "react";
import { inube } from "@inube/design-system";
import { PaletteUI } from "./interface";

import { paletteMessagesConfig } from "./config/palette.config";
import { useNavigate } from "react-router-dom";
import { IUsersMessage } from "@src/pages/privileges/outlets/users/types/users.types";

function Palette() {
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState<IUsersMessage>({
    visible: false,
  });
  const navigate = useNavigate();

  const hasChanges = (valueToCompare: typeof inube) => {
    return (
      JSON.stringify(inube.color.palette) !== JSON.stringify(valueToCompare)
    );
  };

  const handleCloseSectionMessage = () => {
    setMessage({
      visible: false,
    });
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
            data: paletteMessagesConfig.success,
          });
          setTimeout(() => navigate(-1), 4000);
        }
      })
      .catch(() => {
        setMessage({
          visible: true,
          data: paletteMessagesConfig.failed,
        });
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <PaletteUI
      handleSubmitForm={handleSubmitForm}
      isLoading={isLoading}
      message={message}
      hasChanges={hasChanges}
      handleCloseMessage={handleCloseSectionMessage}
    />
  );
}

export { Palette };
