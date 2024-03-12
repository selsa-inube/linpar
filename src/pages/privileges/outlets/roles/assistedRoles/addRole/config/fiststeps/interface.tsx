import { MdOutlineError, MdOutlineModeEdit } from "react-icons/md";
import { FormikValues } from "formik";
import {
  Stack,
  Text,
  Textfield,
  Textarea,
  //SectionMessage,
  Icon,
  Select,
  Grid,
  useMediaQuery,
} from "@inube/design-system";

import { FormButtons } from "@components/forms/submit/FormButtons";
//import { EMessageType } from "@types/messages.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { IGeneralInformationFormProps } from ".";
import { StyledSelectContainer } from "./styles";

interface GeneralInformationFormUIProps {
  formik: FormikValues;
  loading: boolean;
  withSubmitButtons?: boolean;
  showMessage: IMessageState;
  handleCloseSectionMessage: () => void;
  hasChanges: (valueCompare: IGeneralInformationFormProps) => boolean;
  formInvalid: boolean;
  handleSubmitForm: () => void;
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void;
  readOnly?: boolean;
}

const OptionSelect = [
  {
    id: "diferidos",
    label: "diferidos",
    disabled: false,
  },
  {
    id: "pagos",
    label: "pagos PSE ACH",
    disabled: false,
  },
  {
    id: "SIG",
    label: "SIG",
    disabled: false,
  },
];
/* 
function renderMessages(
  showMessage: IMessageState,
  formInvalid: boolean,
  handleCloseSectionMessage: GeneralInformationFormUIProps["handleCloseSectionMessage"]
) {
  if (!showMessage.visible) {
    return null;
  }
  let messageType = EMessageType.SUCCESS;
  if (formInvalid) {
    messageType = EMessageType.FAILED;
  }

  const { title, description, icon, appearance } =
    generalInfoMessages[messageType];

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          title={title}
          description={description}
          icon={icon}
          appearance={appearance}
          duration={4000}
          closeSectionMessage={handleCloseSectionMessage}
        />
      </Stack>
    </StyledMessageContainer>
  );
} */

/* function stateValue(
  formik: GeneralInformationFormUIProps["formik"],
  attribute: string
) {
  if (!formik.touched[attribute]) return "pending";
  if (formik.touched[attribute] && formik.errors[attribute]) return "invalid";
  return "valid";
} */

function RenderFormFields(
  formik: FormikValues,
  loading: boolean,
  formInvalid: boolean,
  handleChangeForm: (event: React.ChangeEvent<HTMLInputElement>) => void,
  readOnly?: boolean
) {
  const mediaQuerie = "(max-width: 744px)";
  const matches = useMediaQuery(mediaQuerie);

  return (
    <Grid
      templateColumns={matches ? "1fr" : "repeat(2, 1fr)"}
      gap="s0 s300"
      width={"100%"}
      autoRows="unset"
    >
      <Stack
        direction="column"
        justifyContent="space-between"
        padding="s050 s0"
      >
        <Textfield
          label="Nombre Rol"
          placeholder="Nombe del rol"
          name="roleName"
          id="roleName"
          value={formik.values.roleName}
          type="text"
          size="compact"
          fullwidth
          onChange={handleChangeForm}
        />
        <StyledSelectContainer>
          <Select
            label="aplication"
            placeholder="seleccione una opción"
            name="aplication"
            id="aplication"
            value={formik.values.aplication}
            type="aplication"
            iconAfter={<MdOutlineModeEdit size={18} />}
            size="compact"
            fullwidth
            onChange={(value: React.ChangeEvent<HTMLInputElement>) =>
              formik.setFieldValue("aplication", value.target.outerText)
            }
            onBlur={formik.handleBlur}
            options={OptionSelect}
          />
        </StyledSelectContainer>
      </Stack>

      <Textarea
        label="Descripción"
        placeholder="Enter product description"
        name="description"
        id="description"
        value={formik.values.description}
        type="text"
        size="compact"
        fullwidth
        onChange={handleChangeForm}
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

function GeneralInformationFormUI(props: GeneralInformationFormUIProps) {
  const {
    formik,
    loading,
    withSubmitButtons,
    // showMessage,
    // handleCloseSectionMessage,
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

export { GeneralInformationFormUI };
