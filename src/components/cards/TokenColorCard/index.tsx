import { Stack, Text, useMediaQuery, Grid, inube } from "@inube/design-system";
import { useContext, useRef, useState, useEffect } from "react";
import tinycolor from "tinycolor2";
import {
  StyledColorTokenCard,
  HiddenColorPicker,
  StyledGridContainer,
  StyledGridColorsContainer,
  getTokenColor,
  StyledDivText,
  StyledHoverPopup,
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
  width: string;
  toggleActive?: boolean;
  setToggleActive?: (props: boolean) => void;
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

  const tablet = useMediaQuery("(max-width: 850px)");
  const width = tablet
    ? `calc(100% - ${inube.spacing.s050})`
    : `calc(100% - ${inube.spacing.s100})`;

  return categories.map(([category, tokens]: string) => (
    <Stack key={category} gap="16px" direction="column" width="100%">
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
            <div key={tokenName} onClick={() => onChange(tokenName)}>
              <TokenColorCard
                tokenName={tokenName}
                palette={categories}
                type="tokenPicker"
                tokenDescription={"Token de color"}
                onColorChange={() => onChange(tokenName)}
                width={width}
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
    width = "335px",
    toggleActive = false,
    setToggleActive = (props: boolean) => {},
  } = props;
  const theme = useContext(ThemeContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 970px)");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const color = tinycolor(getTokenColor(tokenName, theme));
  const isTransparent = color.getAlpha() < 0.5;
  const isDark = color.isDark();
  let textAppearance = isDark ? "light" : "dark";
  textAppearance = isTransparent ? "dark" : textAppearance;

  let hasChanges = toggleActive === isActive;

  useEffect(() => {
    setIsActive(false);

    setIsPopupOpen(false);
  }, [hasChanges]);

  const handleToggleModal = () => {
    setIsActive(!isActive);
    setIsPopupOpen(!isPopupOpen);
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
    }
    if (!isActive) {
      setToggleActive(!toggleActive);
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
    <StyledColorTokenCard
      key={tokenName}
      tokenName={tokenName}
      onClick={handleToggleModal}
      smallScreen={smallScreen}
      isActive={isActive}
      width={width}
    >
      <Stack
        justifyContent="start"
        gap="12px"
        padding="s100 s150"
        alignContent="stretch"
      >
        <Stack alignItems="center" gap="12px">
          <StyledDivText>
            <Text
              type="label"
              size={smallScreen ? "small" : "medium"}
              textAlign={"center"}
              appearance={textAppearance}
            >
              {tokenName}
            </Text>
          </StyledDivText>
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
            <StyledHoverPopup>
              <Popup
                closeModal={() => setIsPopupOpen(false)}
                title={"Paleta de colores"}
                category="regular"
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
            </StyledHoverPopup>
          )}
        </Stack>
      </Stack>
    </StyledColorTokenCard>
  );
}

export { TokenColorCard };
export type { ITokenColorCardProps };
