import { Stack, Text, useMediaQuery, inube } from "@inube/design-system";
import { useRef, useState } from "react";

import { StyledTokenColorCardContainer } from "./styles";
import { Fieldset } from "@src/components/inputs/Fieldset";
import { TokenColorCard } from "../TokenColorCard";

interface FieldsetColorCardProps {
  title: string;
  description: string;
  tokenName: string;
  tokenDescription: string;
  onChange: (tokenName: string, color: string) => void;
}

const mapTokenToCategoryAndState = (tokenName: string | number) => {
  const textTokens = inube.color.text;
  for (const category in textTokens) {
    for (const status in textTokens[category]) {
      if (
        Object.values(inube.color.palette).some(
          (colorGroup: any) =>
            colorGroup[tokenName] === textTokens[category][status]
        )
      ) {
        return { category, status };
      }
    }
  }
  return { category: null, status: null };
};

function FieldsetColorCard(props: FieldsetColorCardProps) {
  const { title, description, tokenName, tokenDescription, onChange } = props;

  const { category, status } = mapTokenToCategoryAndState(tokenName);

  return (
    <Fieldset title={title}>
      <Stack direction="column" gap={inube.spacing.s200}>
        <Text size="medium" appearance="gray">
          {description}
        </Text>
        <Stack gap={inube.spacing.s200} alignItems="center">
          <StyledTokenColorCardContainer>
            <TokenColorCard
              tokenName={tokenName}
              onColorChange={(tokenName, newColor) =>
                onChange(tokenName, newColor)
              }
            />
          </StyledTokenColorCardContainer>
          <Text
            size="medium"
            appearance={category}
            parentHover={status === "hover"}
            disabled={status === "disabled"}
          >
            {tokenDescription}
          </Text>
        </Stack>
      </Stack>
    </Fieldset>
  );
}

export { FieldsetColorCard };
export type { FieldsetColorCardProps };
