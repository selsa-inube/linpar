import { FormikValues } from "formik";
import { Textfield, Grid, useMediaQuery } from "@inube/design-system";
import { FormButtons } from "@components/forms/submit/FormButtons";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";

import { RenderMessage } from "@components/feedback/RenderMessage";

interface AncillaryAccountsFormsUIProps {
  formik: FormikValues;
  withSubmitButtons: boolean;
  hasChanges: (valueCompare: AncillaryAccountsFormsUIProps) => boolean;
  handleSubmit: () => void;
  isLoading?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
}

export function AncillaryAccountsFormsUI(props: AncillaryAccountsFormsUIProps) {
  const {
    formik,
    withSubmitButtons,
    hasChanges,
    handleSubmit,
    isLoading,
    message,
    onCloseSectionMessage,
  } = props;

  const isMobile = useMediaQuery("(max-width: 750px)");

  return (
    <form>
      <Grid
        templateColumns={isMobile ? "1fr" : "repeat(2, 1fr)"}
        gap="s300"
        width={"100%"}
        autoRows="unset"
      >
        <Textfield
          label="Sector oficial"
          placeholder="#######, #######, ..."
          name="officialSector"
          id="officialSector"
          value={formik.values.officialSector}
          type="text"
          size="compact"
          fullwidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Textfield
          label="Sector comercial"
          placeholder="#######, #######, ..."
          name="commercialSector"
          id="commercialSector"
          value={formik.values.commercialSector}
          type="text"
          size="compact"
          fullwidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />

        <Textfield
          label="Sector solidario"
          placeholder="#######, #######, ..."
          name="solidaritySector"
          id="solidaritySector"
          value={formik.values.solidaritySector}
          type="text"
          size="compact"
          fullwidth
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
        />
      </Grid>

      {withSubmitButtons && (
        <>
          <FormButtons
            disabledButtons={!hasChanges(formik.values)}
            handleSubmit={handleSubmit}
            handleReset={formik.resetForm}
            loading={isLoading}
            children={""}
          />
          {message.visible && (
            <RenderMessage
              message={message}
              handleCloseMessage={onCloseSectionMessage}
              onMessageClosed={formik.resetForm}
            />
          )}
        </>
      )}
    </form>
  );
}
