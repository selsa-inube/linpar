import { useState } from "react";
import {
  Button,
  Stack,
  inube,
  useMediaQuery,
  Text,
  CountdownBar,
  Icon,
} from "@inube/design-system";
import { sectionMessageConfig } from "./props";
import { sectionMessageState } from "./config/sectionMessage.state";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdClear } from "react-icons/md";
import { StyledSectionMessage } from "./styles";
import { Appearance, ButtonType } from "./types";

export interface ISectionMessageProps {
  children?: React.ReactNode;
  icon: JSX.Element;
  title: string;
  description: string;
  appearance: Appearance;
  duration: number;
  closeSectionMessage: () => void;
  buttonType: ButtonType;
}

const SectionMessageCustomized = (props: ISectionMessageProps) => {
  const {
    children,
    icon,
    title,
    description,
    appearance = "primary",
    duration,
    closeSectionMessage,
    buttonType = "filled",
  } = props;

  const [isPaused, setIsPaused] = useState(false);
  const isMessageResponsive = useMediaQuery("(max-width: 565px)");

  const newDescription = description.substring(0, 240);

  return (
    <StyledSectionMessage
      appearance={appearance}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      icon={icon}
      title={title}
      description={description}
      duration={duration}
      closeSectionMessage={closeSectionMessage}
      buttonType={buttonType}
    >
      <Stack
        justifyContent="space-between"
        padding={isMessageResponsive ? "s150 s200" : "s200"}
      >
        <Stack
          gap="s200"
          alignItems={isMessageResponsive ? "center" : undefined}
        >
          <Stack alignItems="center" gap="s200">
            <Icon
              size="24px"
              spacing="wide"
              appearance={appearance}
              icon={icon}
            />
            <Stack direction="column" gap="s100">
              <Text size="large">{title}</Text>
              {!isMessageResponsive && (
                <Text size="small" appearance="gray">
                  {newDescription}
                </Text>
              )}
              {children}
            </Stack>
          </Stack>
        </Stack>
        <Stack>
          <Icon
            size="16px"
            onClick={closeSectionMessage}
            appearance={appearance}
            icon={<MdClear />}
          />
        </Stack>
      </Stack>
      {duration && (
        <CountdownBar
          paused={isPaused}
          appearance={appearance}
          duration={duration}
          onCountdown={closeSectionMessage}
        />
      )}
    </StyledSectionMessage>
  );
};

const handleCancel = () => {
  let newSectionMessageState = { ...sectionMessageState };
  newSectionMessageState.sendInfoApproval = false;
  newSectionMessageState.render = false;
  return;
};

const handleAgree = () => {
  let newSectionMessageState = { ...sectionMessageState };
  newSectionMessageState.sendInfoApproval = true;
  newSectionMessageState.render = false;
  return;
};

interface ISendInformationMessageProps {
  appearance: Appearance;
  buttonType: ButtonType;
}

const SendInformationMessage = (props: ISendInformationMessageProps) => {
  const { appearance = "primary", buttonType = "filled" } = props;
  let [cancelDisable, setCancelDisable] = useState(true);

  return (
    <>
      {sectionMessageState.render && (
        <Stack>
          <Stack width="100%">
            <SectionMessageCustomized
              title={sectionMessageConfig.title}
              description={sectionMessageConfig.content}
              duration={sectionMessageConfig.duration}
              closeSectionMessage={() => setCancelDisable(false)}
              icon={<IoMdInformationCircleOutline />}
              appearance={appearance}
              buttonType={buttonType}
            >
              <Stack width="100%" gap={inube.spacing.s075}>
                <Button
                  disabled={cancelDisable}
                  onClick={handleCancel()}
                  appearance={appearance}
                  variant={buttonType}
                  spacing={"compact"}
                >
                  {sectionMessageConfig.cancelButton}
                </Button>
                <Button
                  onClick={handleAgree()}
                  appearance={appearance}
                  variant={buttonType}
                  spacing={"compact"}
                >
                  {sectionMessageConfig.agreeButton}
                </Button>
              </Stack>
            </SectionMessageCustomized>
          </Stack>
        </Stack>
      )}
    </>
  );
};

export { SendInformationMessage };
export type { ISendInformationMessageProps };
