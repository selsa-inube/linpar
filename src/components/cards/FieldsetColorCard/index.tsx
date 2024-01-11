import { Stack, Text, inube } from "@inube/design-system";

import { StyledTokenColorCardContainer, StyledPopupContainer } from "./styles";
import { Fieldset } from "@src/components/inputs/Fieldset";
import { TokenColorCard } from "../TokenColorCard";
import { Appearance } from "./types";

interface FieldsetColorCardProps {
  title: string;
  description: string;
  appearance: Appearance;
  category: string;
  textWithColorToken: string;
  palette: typeof inube;
  onChange: (tokenName: string) => void;
}

const getTokenReferenceFromAppearanceAndCategory = (
  appearance: Appearance,
  category: string
) => {
  const tokenReference = inube.color.text[appearance]?.[category];
  if (!tokenReference) return null;
  const castedPalette = inube.color.palette as Record<
    string,
    Record<string, string>
  >;
  for (const [, colorValues] of Object.entries(castedPalette)) {
    for (const [colorKey, colorValue] of Object.entries(colorValues)) {
      if (colorValue === tokenReference) {
        return colorKey;
      }
    }
  }
  return null;
};

function FieldsetColorCard(props: FieldsetColorCardProps) {
  const {
    title,
    description,
    appearance,
    category,
    textWithColorToken,
    palette,
    onChange,
  } = props;

  const tokenName = getTokenReferenceFromAppearanceAndCategory(
    appearance,
    category
  );

  const handleColorChange = (updatedTokenName: string) => {
    onChange(updatedTokenName);
  };

  return (
    <Fieldset title={title}>
      <>
        <Stack direction="column" gap={inube.spacing.s200}>
          <Text size="medium" appearance="gray">
            {description}
          </Text>
          <Stack gap={inube.spacing.s200} alignItems="center">
            <StyledTokenColorCardContainer>
              <TokenColorCard
                tokenName={tokenName!}
                type="tokenPicker"
                palette={palette}
                onColorChange={handleColorChange}
              />
            </StyledTokenColorCardContainer>
            <Text
              size="medium"
              appearance={appearance}
              parentHover={category === "hover"}
              disabled={category === "disabled"}
            >
              {textWithColorToken}
            </Text>
          </Stack>
        </Stack>
        <StyledPopupContainer id="palette"></StyledPopupContainer>
      </>
    </Fieldset>
  );
}

export { FieldsetColorCard };
export type { FieldsetColorCardProps };
