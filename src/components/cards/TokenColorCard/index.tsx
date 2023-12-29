import { Stack, Text, useMediaQuery } from "@inube/design-system";
import { useState } from "react";
import { StyledSubjectSearchCard } from "./styles";

interface TokenColorCardProps {
  tokenName: string;
  tokenDescription: string;
  onClick: (tokenName: string) => void;
}

function TokenColorCard(props: TokenColorCardProps) {
  const { tokenName, tokenDescription, onClick } = props;
  const [isActive, setIsActive] = useState(false);
  const smallScreen = useMediaQuery("(max-width: 970px)");

  const handleToggleModal = () => {
    setIsActive(!isActive);
    onClick(tokenName);
  };

  return (
    <>
      <StyledSubjectSearchCard
        tokenName={tokenName}
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
              appearance="light"
            >
              {tokenName}
            </Text>
            <Text
              type="label"
              size="medium"
              textAlign="start"
              appearance="light"
            >
              |
            </Text>
            <Text size="medium" textAlign="start" appearance="light">
              {tokenDescription}
            </Text>
          </Stack>
        </Stack>
      </StyledSubjectSearchCard>
    </>
  );
}

export { TokenColorCard };
export type { TokenColorCardProps };
