import styled from "styled-components";

const StyledRadioClient = styled.label`
  box-sizing: border-box;
  padding: 16px 24px;
  width: 500px;
  height: 72px;
  display: grid;
  grid-template-columns: auto 1fr 30%;
  gap: 16px;
  align-items: center;
  align-content: center;
  box-shadow: 1px 2px 2px 1px #eaeaea;
  border: 1px solid #eaeaea;
  cursor: pointer;

  @media screen and (max-width: 532px) {
    width: auto;
    height: auto;
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
