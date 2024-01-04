import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { useRef, useState } from "react";
import tinycolor from "tinycolor2";

import {
  StyledColorTokenCard,
  HiddenColorPicker,
  getTokenColor,
} from "./styles";

interface TokenColorCardProps {
  tokenName: string;
  tokenDescription: string;
  onClick: (tokenName: string, color: string) => void;
}

function TokenColorCard(props: TokenColorCardProps) {
  const { tokenName, tokenDescription, onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const [userColor, setUserColor] = useState("");
  const smallScreen = useMediaQuery("(max-width: 970px)");
  const colorPickerRef = useRef<HTMLInputElement>(null);

  const backgroundColor = getTokenColor(tokenName, null);
  const isDark = tinycolor(backgroundColor).isDark();
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
            value={getTokenColor(tokenName, null)}
            onChange={handleColorChange}
          />
        </Stack>
      </StyledColorTokenCard>
    </>
  );
}

export { TokenColorCard };
export type { TokenColorCardProps };
