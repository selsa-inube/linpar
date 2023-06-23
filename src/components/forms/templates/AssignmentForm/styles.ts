import styled from "styled-components";

interface IStyledHeadContainer {
  smallScreen: boolean;
}

const StyledForm = styled.form`
  width: 100%;
`;

const StyledHeadContainer = styled.div<IStyledHeadContainer>`
  display: grid;
  grid-template-columns: ${(props) =>
    props.smallScreen ? "auto 1fr" : "32% 1fr"};
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
