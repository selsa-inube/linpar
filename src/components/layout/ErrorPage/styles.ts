import styled from "styled-components";

const StyledCompanyLogo = styled.img`
  max-width: 300px;

  @media screen and (max-width: 1000px) {
    margin: 0 auto;
    max-width: 250px;
  }
`;

const StyledErrorImage = styled.img`
  justify-self: center;
  max-width: 100%;
`;

export { StyledCompanyLogo, StyledErrorImage };
