import styled from "styled-components";
import { colors } from "@styles/colors";

const StyledFormContainer = styled.form`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;
  margin-bottom: 32px;

  @media (max-width: 1111px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

const StyledSelect = styled.select`
  display: grid;
  align-items: center;
  box-sizing: border-box;
  border-radius: 8px;
  user-select: none;
  font-family: Roboto;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  outline: none;
  color: ${colors.sys.text.dark};
  background-color: ${colors.ref.palette.neutral.n10};
  border-color: ${colors.ref.palette.neutral.n40};
  padding-left: 16px;
  height: 42px;

  :focus {
    border: 1px solid ${colors.ref.palette.blue.b400};
  }
`;

export { StyledFormContainer, StyledSelect };
