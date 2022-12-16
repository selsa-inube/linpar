import styled from "styled-components";

const StyledLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
  }
`;

const StyledWelcomeContainer = styled.div`
  background-color: #ebecf0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 32px;
`;

const StyledOutletContainer = styled(StyledWelcomeContainer)`
  background-color: white;
`;

const StyledStack = styled.div`
  display: flex;
  flex-direction: column;
`;

const StyledHead2 = styled.h2`
  font-family: "Roboto", sans-serif;
  font-size: 32px;
  font-weight: normal;
  line-height: 40px;
  margin: 0;
`;

const StyledHead3 = styled.h3`
  font-family: "Roboto", sans-serif;
  font-size: 28px;
  font-weight: normal;
  line-height: 36px;
  margin: 0;
`;

const StyledImage = styled.img`
  max-width: 40%;
`;

export {
  StyledLoginContainer,
  StyledWelcomeContainer,
  StyledOutletContainer,
  StyledStack,
  StyledHead2,
  StyledHead3,
  StyledImage,
};
