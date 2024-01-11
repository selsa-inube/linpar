import { useState } from "react";
import {
  SectionMessage,
  Button,
  Stack,
  Text,
  inube,
} from "@inube/design-system";
import { sectionMessageConfig } from "./config/sectionMessage.config";
import { sectionMessageState } from "./config/sectionMessage.state";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { SectionMessageCustomized } from "./sectionMessagesCustomized";

const handleCancel = () => {
  let newSectionMessageState = { ...sectionMessageState };
  newSectionMessageState.sendInfoApproval = false;
  newSectionMessageState.render = false;
  // Code to modified user conditions in DB
  return;
};

const handleAgree = () => {
  let newSectionMessageState = { ...sectionMessageState };
  newSectionMessageState.sendInfoApproval = true;
  newSectionMessageState.render = false;
  // Code to modified user conditions in DB
  return;
};

const SendInformationMessage = () => {
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
            >
              <Stack width="100%" gap={inube.spacing.s050}>
                <Button disabled={cancelDisable} onClick={handleCancel()}>
                  {sectionMessageConfig.cancelButton}
                </Button>
                <Button onClick={handleAgree()}>
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
