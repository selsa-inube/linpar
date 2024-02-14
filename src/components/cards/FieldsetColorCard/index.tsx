import { Stack, Text, inube } from "@inube/design-system";
import {
  StyledTokenColorCardContainer,
  StyledTextWithTokenContainer,
} from "./styles";
import { Fieldset } from "@src/components/inputs/Fieldset";
import { TokenColorCard } from "../TokenColorCard";
import { Appearance } from "./types";
import tinycolor from "tinycolor2";
import { useRef, useEffect } from "react";
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
  tokenName: string;
}

function FieldsetColorCard(props: FieldsetColorCardProps) {
  const {
    title,
    description,
    children,
    optionsMenu,
    onChange,
    toggleActive,
    setToggleActive,
    tokenName,
  } = props;

  const fieldsetRef = useRef() as React.MutableRefObject<HTMLFieldSetElement>;

  useEffect(() => {
    if (fieldsetRef && fieldsetRef.current) {
      fieldsetRef.current.focus();
    }
  }, []);

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
    <Fieldset title={title} fieldsetRef={fieldsetRef}>
      <Stack direction="column" gap={inube.spacing.s200}>
        <Text size="medium" appearance="gray">
          {description}
        </Text>
        <Stack gap={inube.spacing.s200} alignItems="center">
          <StyledTokenColorCardContainer requireBackground={requireBackground}>
            <TokenColorCard
              tokenName={tokenName!}
              type="tokenPicker"
              palette={optionsMenu}
              onColorChange={handleColorChange}
              toggleActive={toggleActive}
              setToggleActive={setToggleActive}
              width="100%"
              fieldsetRef={fieldsetRef}
            />
          </StyledTokenColorCardContainer>
          {children && (
            <StyledTextWithTokenContainer requireBackground={requireBackground}>
              <Stack padding="s100">{children}</Stack>
            </StyledTextWithTokenContainer>
          )}
        </Stack>
      </Stack>
    </Fieldset>
  );
}

export { FieldsetColorCard };
export type { FieldsetColorCardProps };
