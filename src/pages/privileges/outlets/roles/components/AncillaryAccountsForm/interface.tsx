import { FormikValues } from "formik";
import { Textfield, Grid, useMediaQuery } from "@inube/design-system";

import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IAncillaryAccountsForm } from ".";

interface AncillaryAccountsFormsUIProps {
  formik: FormikValues;
  withSubmitButtons: boolean;
  hasChanges: (valueCompare: IAncillaryAccountsForm) => boolean;
  handleChangeForm: (name: string, value: string) => void;
  isLoading?: boolean;
  message: IMessageState;
  onCloseSectionMessage: () => void;
}

export function AncillaryAccountsFormsUI(props: AncillaryAccountsFormsUIProps) {
  const { handleChangeForm, formik } = props;

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
          label="Sector comercial"
          placeholder="#######, #######, ..."
          name="commercialSector"
          id="commercialSector"
          value={formik.values.commercialSector}
          type="text"
          size="compact"
          fullwidth
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => handleChangeForm(event.target.name, event.target.value)}
        />
        <Textfield
          label="Sector oficial"
          placeholder="#######, #######, ..."
          name="officialSector"
          id="officialSector"
          value={formik.values.officialSector}
          type="text"
          size="compact"
          fullwidth
          onBlur={formik.handleBlur}
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => handleChangeForm(event.target.name, event.target.value)}
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
          onChange={(
            event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
          ) => handleChangeForm(event.target.name, event.target.value)}
        />
      </Grid>
    </form>
  );
}
