import { FormButtons } from "@components/forms/submit/FormButtons";
import {
  Stack,
  SectionMessage,
  inube,
  Text,
  Select,
} from "@inube/design-system";
import {
  StyledMessageContainer,
  StyledFontsInfoContainer,
  StyledFontsFieldsetContainer,
} from "./styles";
import { IUsersMessage } from "@pages/privileges/outlets/users/types/users.types";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { fontOptions } from "@pages/people/outlets/typography/fonts/config/fonts.config";
import { Fieldset } from "@src/components/inputs/Fieldset";
const renderMessage = (
  message: IUsersMessage,
  handleCloseMessage: () => void,
  onMessageClosed: () => void
) => {
  if (!message.data) return null;

  const closeMessageAndExecuteCallback = () => {
    handleCloseMessage();
    onMessageClosed();
  };

  return (
    <StyledMessageContainer>
      <Stack justifyContent="flex-end" width="100%">
        <SectionMessage
          appearance={message.data.appearance}
          closeSectionMessage={closeMessageAndExecuteCallback}
          description={message.data.description}
          duration={4000}
          icon={message.data.icon}
          title={message.data.title}
        />
      </Stack>
    </StyledMessageContainer>
  );
};
interface RenderFontContentFormUIProps {
  handleCloseSectionMessage: () => void;
  handleReset: () => void;
  handleSubmitForm: () => void;
  hasChanges: () => boolean;
  isLoading: boolean;
  message: IMessageState;
  updatedTheme: typeof inube;
}
function RenderFontContentFormUI(props: RenderFontContentFormUIProps) {
  const {
    handleCloseSectionMessage,
    handleReset,
    handleSubmitForm,
    hasChanges,
    isLoading,
    message,
  } = props;

  return (
    <>
      <FormButtons
        disabledButtons={!hasChanges()}
        handleSubmit={handleSubmitForm}
        handleReset={handleReset}
        loading={isLoading}
      >
        <Stack
          alignItems="flex-start"
          direction="column"
          gap={inube.spacing.s300}
        >
          <Stack
            alignItems="flex-start"
            direction="column"
            gap={inube.spacing.s200}
          >
            <StyledFontsInfoContainer>
              <Text type="title" size={"medium"}>
                Selección de la fuente
              </Text>
            </StyledFontsInfoContainer>
            <StyledFontsInfoContainer>
              <Text type="body" size={"medium"}>
                Escoge una de las opciones y mediante la vista previa decide
                cual de estas fuentes desas usar. Recuerda que la opción
                seleccionada será usada en todos los textos de la aplicación.
              </Text>
            </StyledFontsInfoContainer>

            <Select
              label="Tipo de fuente"
              required={true}
              options={fontOptions}
              value="Roboto"
              fullwidth={true}
            />
          </Stack>
          <Stack
            alignItems="flex-start"
            direction="column"
            gap={inube.spacing.s200}
            width="100%"
          >
            <StyledFontsInfoContainer>
              <Text type="title" size="medium">
                Vista previa
              </Text>
            </StyledFontsInfoContainer>
            <StyledFontsFieldsetContainer>
              <Fieldset title={"Regular"}>
                <Text type="display" size="small">
                  "The quick brown fox jumps over the lazy dog"
                </Text>
              </Fieldset>
            </StyledFontsFieldsetContainer>
          </Stack>
        </Stack>
      </FormButtons>
      {renderMessage(message, handleCloseSectionMessage, handleReset)}
    </>
  );
}

export { RenderFontContentFormUI };
