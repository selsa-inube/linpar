import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { useRef, useState } from "react";
import tinycolor from "tinycolor2";

import { StyledColorTokenCard, HiddenColorPicker } from "./styles";

interface TokenColorCardProps {
  tokenName: string;
  tokenColor: string;
  tokenDescription: string;
  onClick: (tokenName: string, color: string) => void;
}

function TokenColorCard(props: TokenColorCardProps) {
  const { tokenName, tokenColor, tokenDescription, onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const [userColor, setUserColor] = useState("");
  const smallScreen = useMediaQuery("(max-width: 970px)");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const isDark = tinycolor(tokenColor).isDark();
  const textAppearance = isDark ? "light" : "dark";

  const handleToggleModal = () => {
    setIsActive(!isActive);
    if (colorPickerRef.current) {
      colorPickerRef.current.click();
    }
  };

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newColor = event.target.value;
    setUserColor(newColor);
    onClick(tokenName, newColor);
  };

  return (
    <>
      <StyledColorTokenCard
        tokenName={tokenName}
        tokenColor={tokenColor}
        color={userColor}
        onClick={handleToggleModal}
        smallScreen={smallScreen}
        isActive={isActive}
      >
        <Stack
          justifyContent={"start"}
          gap={"12px"}
          padding={"s100 s150"}
          alignContent={"stretch"}
        >
          <Stack alignItems="center" gap="12px">
            <Text
              type="label"
              size="medium"
              textAlign="start"
              appearance={textAppearance}
            >
              {tokenName}
            </Text>
            <Text
              type="label"
              size="medium"
              textAlign="start"
              appearance={textAppearance}
            >
              |
            </Text>
            <Text size="medium" textAlign="start" appearance={textAppearance}>
              {tokenDescription}
            </Text>
          </Stack>
          <HiddenColorPicker
            ref={colorPickerRef}
            value={tokenColor}
            onChange={handleColorChange}
          />
        </Stack>
      </StyledColorTokenCard>
    </>
  );
}

export { TokenColorCard };
export type { TokenColorCardProps };
