import { MdOutlineError } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Textfield,
  Icon,
  Grid,
  useMediaQuery,
} from "@inube/design-system";

import { FormButtons } from "@components/forms/submit/FormButtons";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IAncillaryAccountsForm } from ".";

interface AncillaryAccountsFormsUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IAncillaryAccountsForm) => boolean;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (name: string, values: string) => void;
  readOnly?: boolean;
}

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (name: string, values: string) => void,
  readOnly?: boolean
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);

  console.log("formik", formik.values);

  return (
    <Grid
      templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeForm(e.target.name, e.target.value)
        }
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeForm(e.target.name, e.target.value)
        }
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
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          handleChangeForm(e.target.name, e.target.value)
        }
      />

      <Stack direction="column" gap="8px">
        {formik.errors.position && formInvalid && (
          <Stack alignItems="center" margin="s0 s0 s0 s150">
            <Icon
              appearance={"error"}
              icon={<MdOutlineError />}
              spacing="wide"
              size="14px"
              shape="circle"
            />
            <Text size="small" margin="8px 0px 0px 4px" appearance="error">
              ({formik.errors.position})
            </Text>
          </Stack>
        )}
      </Stack>
    </Grid>
  );
}

export function AncillaryAccountsFormsUI(props: AncillaryAccountsFormsUIProps) {
  const {
    formik,
    loading,
    withSubmitButtons,
    hasChanges,
    formInvalid,
    handleSubmitForm,
    handleChangeForm,
    readOnly,
  } = props;

  if (withSubmitButtons) {
    return (
      <>
        <FormButtons
          handleSubmit={handleSubmitForm}
          handleReset={formik.resetForm}
          disabledButtons={!hasChanges(formik.values)}
          loading={loading}
        >
          {RenderFormFields(formik, loading, formInvalid, handleChangeForm)}
        </FormButtons>
      </>
    );
  }

  return (
    <>
      {RenderFormFields(
        formik,
        loading,
        formInvalid,
        handleChangeForm,
        readOnly
      )}
    </>
  );
}
