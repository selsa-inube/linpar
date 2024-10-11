import styled from "styled-components";

const StyledCompanyLogo = styled.img`
  width: 100%;
  max-width: 300px;

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
    max-width: 250px;
  }
`;

const StyledCompany = styled.div`
  width: 100%;
  padding-left: 16px;
`;

const StyledErrorImage = styled.img`
  max-width: 100%;
`;

export const StyledContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export { StyledCompanyLogo, StyledErrorImage, StyledCompany };
