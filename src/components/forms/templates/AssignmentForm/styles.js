import styled from "styled-components";

const StyledForm = styled.form`
  width: 100%;
`;

const StyledHeadContainer = styled.div`
  display: grid;
  grid-template-columns: auto 1fr;
  grid-gap: 16px;
  align-items: center;
`;

const StyledEntriesContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: 344px;
  overflow-y: scroll;
  margin-top: 32px;
`;

const StyledOptionsContainer = styled.div`
  height: 24px;
  text-align: right;
`;

export {
  StyledHeadContainer,
  StyledEntriesContainer,
  StyledForm,
  StyledOptionsContainer,
};
