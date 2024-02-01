import {
  Stack,
  Text,
  useMediaQuery,
  Grid,
  inube,
  Icon,
} from "@inube/design-system";
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
  StyledHoverIcon,
} from "./styles";
import { ThemeContext } from "styled-components";
import { Popup } from "@src/components/feedback/Popup";
import { categoryTranslations } from "@src/pages/people/outlets/palette/config/palette.config";
import { MdOutlineEdit } from "react-icons/md";

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

  const mobile = useMediaQuery("(max-width: 745px)");

  const width = mobile ? "280px" : "302px";
  const fontSize = mobile ? "small" : "medium";

  return categories.map(([category, tokens]: string) => (
    <Stack key={category} gap="16px" direction="column" width={width}>
      <Text type="title" size={fontSize} textAlign="start" appearance="dark">
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
  const [isHovered, setIsHovered] = useState(false);

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
      type={type}
      key={tokenName}
      tokenName={tokenName}
      onClick={handleToggleModal}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      smallScreen={smallScreen}
      isActive={isActive}
      width={width}
    >
      <Stack
        gap="12px"
        padding="s100 s150"
        alignContent="stretch"
        justify="center"
        width={type === "colorPicker" ? "100%" : "auto"}
      >
        <Stack
          alignItems="center"
          gap="12px"
          width={type === "colorPicker" ? "100%" : "auto"}
        >
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
        {type === "colorPicker" && (
          <StyledHoverIcon>
            <Icon appearance={textAppearance} icon={<MdOutlineEdit />} />
          </StyledHoverIcon>
        )}
      </Stack>
    </StyledColorTokenCard>
  );
}

export { TokenColorCard };
export type { ITokenColorCardProps };
