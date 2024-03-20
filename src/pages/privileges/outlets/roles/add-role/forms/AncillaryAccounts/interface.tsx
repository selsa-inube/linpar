import { FormikValues } from "formik";
import { Textfield, Grid, useMediaQuery } from "@inube/design-system";

interface AncillaryAccountsFormsUIProps {
  formik: FormikValues;
  loading?: boolean;
}

export function AncillaryAccountsFormsUI(props: AncillaryAccountsFormsUIProps) {
  const { formik } = props;

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
          placeholder="xx.xxx.xxx"
          name="officialSector"
          id="officialSector"
          value={formik.values.officialSector}
          type="text"
          size="compact"
          fullwidth
          onChange={formik.handleChange}
        />

        <Textfield
          label="Sector comercial"
          placeholder="Nombe del rol"
          name="commercialSector"
          id="commercialSector"
          value={formik.values.commercialSector}
          type="text"
          size="compact"
          fullwidth
          onChange={formik.handleChange}
        />

        <Textfield
          label="Sector solidario"
          placeholder="Ingresar descripción del rol."
          name="solidaritySector"
          id="solidaritySector"
          value={formik.values.solidaritySector}
          type="text"
          size="compact"
          fullwidth
          onChange={formik.handleChange}
        />
      </Grid>
    </form>
  );
}
