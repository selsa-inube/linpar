import { inube } from "@inube/design-system";
import styled from "styled-components";
import React from "react";

const StyledFieldset = styled.fieldset`
  border-radius: 15px;
  border-style: solid;
  border-color: ${inube.color.stroke.divider.regular};
  padding: 14px 24px 24px 24px;
  ref: ${(ref): React.MutableRefObject<HTMLFieldSetElement> => ref};
`;

export { StyledFieldset };
