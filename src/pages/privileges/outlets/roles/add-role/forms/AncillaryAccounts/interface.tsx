import { FormikValues } from "formik";
import { Textfield, Grid, useMediaQuery } from "@inube/design-system";
import { FormButtons } from "@components/forms/submit/FormButtons";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { RenderMessage } from "@components/feedback/RenderMessage";

interface AncillaryAccountsFormsUIProps {
  formik: FormikValues;
  withSubmitButtons: boolean;
  hasChanges: (valueCompare: AncillaryAccountsFormsUIProps) => boolean;
  handleSubmit: (name: string, value: string) => void;
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

  const stateValue = (fieldName: string) => {
    if (!formik.touched[fieldName]) return "pending";
    if (formik.touched[fieldName] && formik.errors[fieldName]) return "invalid";
    return "valid";
  };

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
          required
          onBlur={formik.handleBlur}
          message={
            stateValue("officialSector") === "invalid"
              ? formik.errors.officialSector
              : "Cuentas del Sector Oficial: válido"
          }
          status={stateValue("officialSector")}
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
          required
          onBlur={formik.handleBlur}
          message={
            stateValue("commercialSector") === "invalid"
              ? formik.errors.commercialSector
              : "Cuentas del Sector Comercial: válido"
          }
          status={stateValue("commercialSector")}
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
          required
          onBlur={formik.handleBlur}
          message={
            stateValue("solidaritySector") === "invalid"
              ? formik.errors.solidaritySector
              : "Cuentas del Sector Solidario: válido"
          }
          status={stateValue("solidaritySector")}
        />
      </Grid>

      {withSubmitButtons && (
        <>
          <FormButtons
            disabledButtons={!hasChanges(formik.values)}
            handleSubmit={handleSubmit}
            handleReset={formik.resetForm}
            loading={isLoading}
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
