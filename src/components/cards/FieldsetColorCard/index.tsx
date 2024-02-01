import { Stack, Text, inube } from "@inube/design-system";
import { ThemeContext } from "styled-components";
import {
  StyledTokenColorCardContainer,
  StyledTextWithTokenContainer,
} from "./styles";
import { Fieldset } from "@src/components/inputs/Fieldset";
import { TokenColorCard } from "../TokenColorCard";
import { Appearance } from "./types";
import tinycolor from "tinycolor2";
import { useContext } from "react";
import { getTokenColor } from "../TokenColorCard/styles";

interface FieldsetColorCardProps {
  title: string;
  description: string;
  appearance: Appearance;
  category: string;
  children?: React.ReactNode;
  typeToken?: string;
  optionsMenu: typeof inube;
  onChange: (tokenName: string) => void;
  toggleActive?: boolean;
  setToggleActive?: (props: boolean) => void;
}

const getTokenReferenceFromAppearanceAndCategory = (
  appearance: Appearance,
  typeToken: string,
  category: string,
  tokens: typeof inube
): string | null => {
  const tokenReference = tokens[typeToken]?.[appearance]?.[category];

  if (!tokenReference) return null;
  const castedPalette = tokens.palette as Record<
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
    children,
    typeToken = "text",
    optionsMenu,
    onChange,
    toggleActive,
    setToggleActive,
  } = props;

  const themeContext = useContext(ThemeContext);
  const tokens = themeContext?.color || inube.color;

  const tokenName = getTokenReferenceFromAppearanceAndCategory(
    appearance,
    typeToken,
    category,
    tokens
  );

  const handleColorChange = (updatedTokenName: string) => {
    onChange(updatedTokenName);
  };

  const tokenColor = getTokenColor(tokenName!);
  const color = tinycolor(tokenColor);
  const isTransparent = color.getAlpha() === 0;

  const requireBackground =
    (tokenName === "N10" ||
      tokenName === "N0" ||
      tokenName === "N10A" ||
      tokenName === "N0A") &&
    (isTransparent || color.isLight());

  return (
    <>
      <Fieldset title={title} id={category}>
        <Stack direction="column" gap={inube.spacing.s200}>
          <Text size="medium" appearance="gray">
            {description}
          </Text>
          <Stack gap={inube.spacing.s200} alignItems="center">
            <StyledTokenColorCardContainer
              requireBackground={requireBackground}
            >
              <TokenColorCard
                tokenName={tokenName!}
                type="tokenPicker"
                palette={optionsMenu}
                onColorChange={handleColorChange}
                toggleActive={toggleActive}
                setToggleActive={setToggleActive}
              />
            </StyledTokenColorCardContainer>
            {children && (
              <StyledTextWithTokenContainer
                requireBackground={requireBackground}
              >
                <Stack padding="s100">{children}</Stack>
              </StyledTextWithTokenContainer>
            )}
          </Stack>
        </Stack>
      </Fieldset>
    </>
  );
}

export { FieldsetColorCard };
export type { FieldsetColorCardProps };
