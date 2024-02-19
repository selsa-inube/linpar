import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRadioClient {
  theme?: typeof inube;
}

const StyledRadioClient = styled.label`
  & div {
    box-sizing: border-box;
    min-height: 58px;
    box-shadow: 1px 2px 2px 1px
      ${({ theme }: IStyledRadioClient) =>
        theme?.color?.surface?.gray?.regular ||
        inube.color.surface.gray.regular};
    border: 1px solid
      ${({ theme }: IStyledRadioClient) =>
        theme?.color?.surface?.gray?.regular ||
        inube.color.surface.gray.regular};
    cursor: pointer;
  }
`;

const StyledRadio = styled.input`
  width: 16px;
  height: 16px;

  &:checked ~ img {
    filter: grayscale(0%);
  }
`;

const StyledImage = styled.img`
  font-family: "Roboto";
  font-size: 14px;
  width: 100%;
  transition: filter 500ms ease-out;
  filter: grayscale(100%);

  @media screen and (max-width: 460px) {
    display: none;
  }
`;

export { StyledRadioClient, StyledImage, StyledRadio };
