import { Stack, Text, useMediaQuery, Grid, inube } from "@inube/design-system";
import { useContext, useRef, useState } from "react";
import tinycolor from "tinycolor2";
import {
  StyledColorTokenCard,
  HiddenColorPicker,
  StyledGridContainer,
  StyledGridColorsContainer,
  getTokenColor,
} from "./styles";
import { ThemeContext } from "styled-components";
import { Popup } from "@src/components/feedback/Popup";
import { categoryTranslations } from "@src/pages/people/outlets/palette/config/palette.config";

interface ITokenColorCardProps {
  tokenName: string;
  tokenDescription?: string;
  type?: "colorPicker" | "tokenPicker";
  palette?: typeof inube;
  onColorChange: (tokenName: string, newColor?: string) => void;
}

interface renderCategoryGridProps {
  categories: typeof inube;
  templateColumns: string;
  templateRows?: string;
  autoFlow?: string;
  hasBackground?: boolean;
  onChange: any;
}

function RenderCategoryGrid(props: renderCategoryGridProps) {
  const {
    categories,
    templateColumns,
    templateRows = "auto",
    autoFlow = "row",
    hasBackground = false,
    onChange,
  } = props;

  return categories.map(([category, tokens]: string) => (
    <Stack key={category} gap="16px" direction="column">
      <Text
        type="title"
        size="medium"
        padding="0px"
        textAlign="start"
        appearance="dark"
      >
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
            <div key={tokenName} onClick={() => onChange(tokenName)}>
              <TokenColorCard
                tokenName={tokenName}
                palette={categories}
                type="tokenPicker"
                tokenDescription={"Token de color"}
                onColorChange={() => onChange(tokenName)}
              />
            </div>
          ))}
        </Grid>
      </StyledGridContainer>
    </Stack>
  ));
}

function TokenColorCard(props: ITokenColorCardProps) {
  const {
    tokenName,
    tokenDescription,
    type = "colorPicker",
    palette,
    onColorChange,
  } = props;
  const theme = useContext(ThemeContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 970px)");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const isDark = tinycolor(getTokenColor(tokenName, theme)).isDark();
  const textAppearance = isDark ? "light" : "dark";

  const handleToggleModal = () => {
    setIsActive(!isActive);
    setIsPopupOpen(!isActive);
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
    }
  };

  const handleColorChangeLocal = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const newColor = event.target.value;
    onColorChange(tokenName, newColor);
  };

  const handleColorChangeCategory = (tokenName: string) => {
    onColorChange(tokenName);
  };

  return (
    <>
      <StyledColorTokenCard
        key={tokenName}
        tokenName={tokenName}
        onClick={handleToggleModal}
        smallScreen={smallScreen}
        isActive={isActive}
      >
        <Stack
          justifyContent="start"
          gap="12px"
          padding="s100 s150"
          alignContent="stretch"
        >
          <Stack alignItems="center" gap="12px">
            <Text
              type="label"
              size={smallScreen ? "small" : "medium"}
              textAlign={tokenDescription ? "start" : "center"}
              appearance={textAppearance}
            >
              {tokenName}
            </Text>
            {tokenDescription && (
              <>
                <Text
                  type="label"
                  size={smallScreen ? "small" : "medium"}
                  textAlign="start"
                  appearance={textAppearance}
                >
                  |
                </Text>
                <Text
                  size={smallScreen ? "small" : "medium"}
                  textAlign="start"
                  appearance={textAppearance}
                >
                  {tokenDescription}
                </Text>
              </>
            )}
            {type === "colorPicker" && (
              <HiddenColorPicker
                ref={colorPickerRef}
                value={getTokenColor(tokenName, theme)}
                onChange={handleColorChangeLocal}
              />
            )}
            {isPopupOpen && type === "tokenPicker" && (
              <Popup
                portalId="palette"
                closeModal={() => setIsPopupOpen(false)}
                title={"Paleta de colores"}
              >
                <StyledGridColorsContainer>
                  <Grid
                    templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                    gap="s150"
                    autoColumns="unset"
                    autoRows="unset"
                  >
                    <RenderCategoryGrid
                      categories={Object.entries(palette)}
                      templateColumns="repeat(auto-fit, minmax(250px, 1fr))"
                      onChange={handleColorChangeCategory}
                    />
                  </Grid>
                </StyledGridColorsContainer>
              </Popup>
            )}
          </Stack>
        </Stack>
      </StyledColorTokenCard>
    </>
  );
}

export { TokenColorCard };
export type { ITokenColorCardProps };
