import { useMediaQuery, Grid, inube, Icon } from "@inube/design-system";
import { useContext, useRef, useState, useEffect } from "react";
import tinycolor from "tinycolor2";
import {
  StyledColorTokenCard,
  HiddenColorPicker,
  StyledGridColorsContainer,
  StyledDivText,
  StyledHoverPopup,
  StyledHoverIcon,
} from "./styles";
import { ThemeContext, ThemeProvider } from "styled-components";
import { Popup } from "@components/feedback/Popup";
import { MdOutlineEdit } from "react-icons/md";
import { RenderCategoryGrid } from "@components/layout/RenderCategoryGrid";
import { getTokenColor } from "@src/utils/getTokenColor";
import { Stack } from "@inubekit/stack";
import { ITextAppearance, Text } from "@inubekit/text";

interface ITokenColorCardProps {
  tokenName: string;
  tokenDescription?: string;
  type?: "colorPicker" | "tokenPicker";
  palette?: typeof inube;
  onColorChange: (tokenName: string, newColor?: string) => void;
  width: string;
  toggleActive?: boolean;
  setToggleActive?: (props: boolean) => void;
  fieldsetRef?: React.MutableRefObject<HTMLFieldSetElement>;
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
    fieldsetRef = undefined,
  } = props;
  const theme = useContext(ThemeContext);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 970px)");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const color = tinycolor(getTokenColor(tokenName, theme));
  const isTransparent = color.getAlpha() < 0.5;
  const isDark = color.isDark();
  let textAppearance: ITextAppearance = isDark ? "light" : "dark";
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
      type={type}
      key={tokenName}
      $tokenName={tokenName}
      onClick={handleToggleModal}
      $smallScreen={smallScreen}
      $isActive={isActive}
      width={width}
    >
      <Stack
        gap="12px"
        padding="8px 15px"
        alignContent="stretch"
        width={type === "colorPicker" ? "100%" : "auto"}
      >
        <Stack
          alignItems="center"
          gap="12px"
          width={type === "colorPicker" ? "100%" : "auto"}
        >
          <ThemeProvider theme={inube}>
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
          </ThemeProvider>
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
                fieldsetRef={fieldsetRef}
              >
                <StyledGridColorsContainer>
                  <Grid
                    templateColumns="repeat(auto-fit, minmax(244px, 1fr))"
                    gap="s150"
                    autoColumns="unset"
                    autoRows="unset"
                  >
                    <RenderCategoryGrid
                      categories={Object.entries(palette)}
                      templateColumns="repeat(auto-fit, minmax(232px, 1fr))"
                      onChange={handleColorChangeCategory}
                      hasTitle
                    />
                  </Grid>
                </StyledGridColorsContainer>
              </Popup>
            </StyledHoverPopup>
          )}
        </Stack>
        {type === "colorPicker" && (
          <ThemeProvider theme={inube}>
            <StyledHoverIcon>
              <Icon appearance={textAppearance} icon={<MdOutlineEdit />} />
            </StyledHoverIcon>
          </ThemeProvider>
        )}
      </Stack>
    </StyledColorTokenCard>
  );
}
export { TokenColorCard };
export type { ITokenColorCardProps };
