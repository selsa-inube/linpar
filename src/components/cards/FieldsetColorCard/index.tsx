import { Stack, Text, inube } from "@inube/design-system";

import {
  StyledTokenColorCardContainer,
  StyledPopupContainer,
  StyledTextWithTokenContainer,
  getTokenColor,
} from "./styles";
import { Fieldset } from "@src/components/inputs/Fieldset";
import { TokenColorCard } from "../TokenColorCard";
import { Appearance } from "./types";
import tinycolor from "tinycolor2";

interface FieldsetColorCardProps {
  title: string;
  description: string;
  appearance: Appearance;
  category: string;
  textWithColorToken?: string;
  typeToken?: string;
  optionsMenu: typeof inube;
  onChange: (tokenName: string) => void;
}

const getTokenReferenceFromAppearanceAndCategory = (
  appearance: Appearance,
  typeToken: string,
  category: string
): string | null => {
  const tokenReference = inube.color[typeToken]?.[appearance]?.[category];
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
    typeToken = "text",
    optionsMenu,
    onChange,
  } = props;

  const tokenName = getTokenReferenceFromAppearanceAndCategory(
    appearance,
    typeToken,
    category
  );

  const handleColorChange = (updatedTokenName: string) => {
    onChange(updatedTokenName);
  };

  const isDark = tinycolor(getTokenColor(tokenName!)).isDark();

  return (
    <Fieldset title={title}>
      <>
        <Stack direction="column" gap={inube.spacing.s200}>
          <Text size="medium" appearance="gray">
            {description}
          </Text>
          <Stack gap={inube.spacing.s200} alignItems="center">
            <StyledTokenColorCardContainer isDark={isDark}>
              <TokenColorCard
                tokenName={tokenName!}
                type="tokenPicker"
                palette={optionsMenu}
                onColorChange={handleColorChange}
              />
            </StyledTokenColorCardContainer>
            {textWithColorToken && (
              <StyledTextWithTokenContainer isDark={isDark}>
                <Stack padding="s100">
                  <Text
                    size="medium"
                    appearance={appearance}
                    parentHover={category === "hover"}
                    disabled={category === "disabled"}
                  >
                    {textWithColorToken}
                  </Text>
                </Stack>
              </StyledTextWithTokenContainer>
            )}
          </Stack>
        </Stack>
        <StyledPopupContainer id="palette"></StyledPopupContainer>
      </>
    </Fieldset>
  );
}

export { FieldsetColorCard };
export type { FieldsetColorCardProps };
