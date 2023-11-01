import styled from "styled-components";
import { inube } from "@inube/design-system";

interface IStyledRadioClient {
  theme?: typeof inube;
}

const StyledRadioClient = styled.label`
  box-sizing: border-box;
  padding: ${inube.spacing.s200} ${inube.spacing.s300};
  height: 72px;
  min-height: 58px;
  width: 100%;
  display: grid;
  grid-template-columns: auto 1fr 130px;
  gap: 16px;
  align-items: center;
  align-content: center;
  box-shadow: 1px 2px 2px 1px
    ${({ theme }: IStyledRadioClient) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  border: 1px solid
    ${({ theme }: IStyledRadioClient) =>
      theme?.color?.surface?.gray?.regular || inube.color.surface.gray.regular};
  cursor: pointer;

  @media screen and (max-width: 532px) {
    height: auto;
    padding: ${inube.spacing.s200} ${inube.spacing.s300};
  }

  @media screen and (max-width: 360px) {
    grid-template-columns: auto 1fr;
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

  @media screen and (max-width: 360px) {
    display: none;
  }
`;

export { StyledRadioClient, StyledImage, StyledRadio };
