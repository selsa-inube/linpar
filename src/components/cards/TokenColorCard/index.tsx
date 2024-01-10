import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { useContext, useRef, useState } from "react";
import tinycolor from "tinycolor2";
import {
  StyledColorTokenCard,
  HiddenColorPicker,
  getTokenColor,
} from "./styles";
import { ThemeContext } from "styled-components";

interface ITokenColorCardProps {
  onColorChange: (tokenName: string, newColor: string) => void;
  tokenName: string;
  tokenDescription?: string;
  size?: string;
}

function TokenColorCard(props: ITokenColorCardProps) {
  const { tokenName, tokenDescription, onColorChange } = props;
  const theme = useContext(ThemeContext);

  const [isActive, setIsActive] = useState(false);

  const smallScreen = useMediaQuery("(max-width: 970px)");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const isDark = tinycolor(getTokenColor(tokenName, theme)).isDark();
  const textAppearance = isDark ? "light" : "dark";

  const handleToggleModal = () => {
    setIsActive(!isActive);
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
            <HiddenColorPicker
              ref={colorPickerRef}
              value={getTokenColor(tokenName, theme)}
              onChange={handleColorChangeLocal}
            />
          </Stack>
        </Stack>
      </StyledColorTokenCard>
    </>
  );
}

export { TokenColorCard };
export type { ITokenColorCardProps };
