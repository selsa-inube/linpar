import { Link } from "react-router-dom";
import styled from "styled-components";
import { colors } from "../../../../../../../styles/colors";

const StyledLink = styled(Link)`
  color: ${colors.ref.palette.neutral.n900};

  &:hover {
    color: ${colors.ref.palette.blue.b400};
  }
`;
export { StyledLink };
