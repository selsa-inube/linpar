import { FormButtons } from "@components/forms/submit/FormButtons";
import { Stack, inube, Text, Select } from "@inube/design-system";
import {
  StyledFontsInfoContainer,
  StyledFontsFieldsetContainer,
} from "./styles";
import { IMessageState } from "@pages/privileges/outlets/users/types/forms.types";
import { fontOptions } from "@pages/people/outlets/typography/fonts/config/fonts.config";
import { Fieldset } from "@components/inputs/Fieldset";
import { RenderMessage } from "@components/layout/RenderMessage";

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
      {message.visible && (
        <RenderMessage
          message={message}
          handleCloseMessage={handleCloseSectionMessage}
          onMessageClosed={handleReset}
        />
      )}
    </>
  );
}

export { RenderFontContentFormUI };
