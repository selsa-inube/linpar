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
  max-height: 344px;
  overflow-y: auto;
  margin-top: 32px;
`;

const StyledOptionsContainer = styled.div`
  height: 24px;
  text-align: right;
`;

export {
  StyledEntriesContainer,
  StyledForm,
  StyledHeadContainer,
  StyledOptionsContainer,
};
