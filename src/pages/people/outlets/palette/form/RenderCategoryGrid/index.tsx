import { Grid, Stack, Text, inube } from "@inube/design-system";
import { categoryTranslations } from "../../config/palette.config";
import { StyledGridContainer } from "./styles";
import { TokenColorCard } from "@src/components/cards/TokenColorCard";

interface renderCategoryGridProps {
  categories: typeof inube;
  templateColumns: string;
  templateRows?: string;
  autoFlow?: string;
  hasBackground?: boolean;
  handleColorChange: (tokenName: string, newColor: string) => void;
}
function RenderCategoryGrid(props: renderCategoryGridProps) {
  const {
    categories,
    templateColumns,
    templateRows = "auto",
    autoFlow = "row",
    hasBackground = false,
    handleColorChange,
  } = props;
  return categories.map(([category, tokens]: string) => (
    <Stack key={category} gap="16px" direction="column">
      <Text type="title" size="medium" textAlign="start" appearance="dark">
        {categoryTranslations[category] || category}
      </Text>
      <StyledGridContainer hasBackground={hasBackground}>
        <Grid
          templateColumns={templateColumns}
          templateRows={templateRows}
          gap="s050"
          autoColumns="unset"
          autoRows="unset"
          autoFlow={autoFlow}
        >
          {Object.entries(tokens).map(([tokenName]) => (
            <TokenColorCard
              key={tokenName}
              tokenName={tokenName}
              tokenDescription={"Token de color"}
              onColorChange={(tokenName, newColor) =>
                handleColorChange(tokenName, newColor!)
              }
              width="auto"
            />
          ))}
        </Grid>
      </StyledGridContainer>
    </Stack>
  ));
}

export { RenderCategoryGrid };
