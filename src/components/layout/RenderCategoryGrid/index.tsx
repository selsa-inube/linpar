import { ThemeProvider } from "styled-components";
import { inube } from "@inube/design-system";

import { TokenColorCard } from "@components/cards/TokenColorCard";
import { Grid } from "@inubekit/grid";
import { Stack } from "@inubekit/stack";
import { useMediaQuery } from "@inubekit/hooks";
import { Text } from "@inubekit/text";

import { StyledGridContainer, StyledTokenColorCardContainer } from "./styles";

interface renderCategoryGridProps {
  autoFlow?: string;
  autoColumns?: string;
  autoRows?: string;
  categories: typeof inube;
  hasBackground?: boolean;
  hasTitle?: boolean;
  gap?: string;
  onChange: (tokenName: string, newColor?: string) => void;
  templateColumns: string;
  templateRows?: string;
  type?: "colorPicker" | "tokenPicker";
}

function RenderCategoryGrid(props: renderCategoryGridProps) {
  const {
    autoColumns = "unset",
    autoRows = "unset",
    categories,
    gap = "s150",
    hasBackground = false,
    hasTitle = false,
    templateColumns,
    templateRows = "auto",
    type = "colorPicker",
    onChange,
  } = props;

  const tablet = useMediaQuery("(max-width: 850px)");
  const width = tablet
    ? `calc(100% - ${inube.spacing.s075})`
    : `calc(100% - ${inube.spacing.s100})`;
  const mobile = useMediaQuery("(max-width: 745px)");
  const fontSize = mobile ? "small" : "medium";

  return type === "colorPicker" ? (
    categories.map(([category, tokens]: string) => (
      <Stack key={category} gap="16px" direction="column" width={width}>
        {hasTitle && (
          <ThemeProvider theme={inube}>
            <Text
              type="title"
              size={fontSize}
              textAlign="start"
              appearance="dark"
            ></Text>
          </ThemeProvider>
        )}
        <StyledGridContainer $hasBackground={hasBackground}>
          <Grid
            templateColumns={templateColumns}
            templateRows={templateRows}
            gap={"s050"}
            autoColumns={autoColumns}
            autoRows={autoRows}
          >
            {Object.entries(tokens).map(([tokenName]) => (
              <StyledTokenColorCardContainer
                key={tokenName}
                onClick={() => onChange(tokenName)}
              >
                <TokenColorCard
                  tokenName={tokenName}
                  type="tokenPicker"
                  tokenDescription={"Token de color"}
                  onColorChange={() => onChange(tokenName)}
                  palette={categories}
                  width={"100%"}
                />
              </StyledTokenColorCardContainer>
            ))}
          </Grid>
        </StyledGridContainer>
      </Stack>
    ))
  ) : (
    <Grid
      templateColumns={templateColumns}
      templateRows={templateRows}
      gap={gap}
      autoColumns={autoColumns}
      autoRows={autoRows}
    >
      {Object.entries(categories).map(([tokenName]) => (
        <Stack key={tokenName} gap="16px" direction="column">
          <TokenColorCard
            key={tokenName}
            tokenName={tokenName}
            tokenDescription={"Token de color"}
            type="colorPicker"
            onColorChange={(tokenName, newColor) =>
              onChange(tokenName, newColor!)
            }
            width="auto"
          />
        </Stack>
      ))}
    </Grid>
  );
}

export { RenderCategoryGrid };
export type { renderCategoryGridProps };
