import { Stack, Text } from "@inube/design-system";
import { Accordion } from "@src/components/data/Accordion";
import { IVerificationData } from "../types";

interface VerificationStepProps {
  verificationData: Record<string, IVerificationData>;
  smallScreen?: boolean;
}

function VerificationStep(props: VerificationStepProps) {
  const { verificationData, smallScreen } = props;

  return (
    <Stack direction="column" gap={smallScreen ? "16px" : "32px"}>
      <Stack>
        <Text typo="titleMedium">Verification</Text>
      </Stack>
      <Stack
        direction={smallScreen ? "column" : "row"}
        wrap={smallScreen ? "nowrap" : "wrap"}
        gap={smallScreen ? "16px" : "24px"}
        alignItems="flex-start"
      >
        {Object.entries(verificationData).map(
          ([key, item]: [string, IVerificationData]) => (
            <Accordion
              key={item.id}
              title={item.title}
              isFullWidth={smallScreen || item.isFullWidth}
            >
              {item.content}
            </Accordion>
          )
        )}
      </Stack>
    </Stack>
  );
}

export { VerificationStep };
export type { VerificationStepProps };
