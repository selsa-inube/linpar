import styled from "styled-components";

const StyledErrorPage = styled.div`
  padding: 80px;
  display: flex;
  flex-direction: column;
  gap: 120px;

  @media screen and (max-width: 1000px) {
    gap: 64px;
  }

  @media screen and (max-width: 600px) {
    padding: 32px;
  }
`;

const StyledCompanyLogo = styled.img`
  max-width: 300px;

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
    max-width: 250px;
  }
`;

const StyledGrid = styled.div`
  align-items: center;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 64px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    gap: 120px;
  }

  @media screen and (max-width: 600px) {
    gap: 64px;
  }
`;

const StyledErrorImage = styled.img`
  justify-self: center;
  max-width: 100%;
`;

export { StyledErrorPage, StyledCompanyLogo, StyledGrid, StyledErrorImage };
