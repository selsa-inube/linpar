import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
`;

const StyledEntriesContainer = styled.div`
  & > div {
    max-height: 300px;
    overflow-y: auto;
    overflow-x: hidden;
    width: 100%;
  }

  @media (max-width: 480px) {
    & > div {
      width: 270px;
    }
    & > div > div > div > label:nth-child(2) {
      width: 200px;
    }
  }
`;

const StyledOptionsContainer = styled.div`
  position: relative;
  height: "24px";
  text-align: right;
`;

const StyledToggle = styled.div`
  display: flex;
  flex-direction: row;
  gap: 8px;
`;

export {
  StyledEntriesContainer,
  StyledForm,
  StyledOptionsContainer,
  StyledToggle,
};
