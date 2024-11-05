import React from "react";
import { Icon } from "@inubekit/icon";
import { Text } from "@inube/design-system";
import { Stack } from "@inubekit/stack";
import { StyledFieldset } from "./styles";

export interface FieldsetProps {
  title: string;
  children: JSX.Element;
  icon?: JSX.Element;
  fieldsetRef?: React.MutableRefObject<HTMLFieldSetElement>;
}

function Fieldset(props: FieldsetProps) {
  const { title, children, icon, fieldsetRef } = props;

  return (
    <StyledFieldset ref={fieldsetRef}>
      <legend>
        <Stack padding="4px" alignItems="center">
          <Icon icon={icon} appearance="gray" />
          <Text type="title" size="small" appearance="gray">
            {title}
          </Text>
        </Stack>
      </legend>
      {children}
    </StyledFieldset>
  );
}

export { Fieldset };
