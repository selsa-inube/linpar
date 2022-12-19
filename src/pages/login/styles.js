import styled from "styled-components";

const StyledLoginContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  min-height: 100vh;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr;
    grid-template-rows: 40% 60%;
  }

  @media screen and (max-width: 600px) {
    grid-template-rows: 25% 75%;
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
  padding: 32px 16px;
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
  StyledHead2,
  StyledHead3,
  StyledImage,
};
