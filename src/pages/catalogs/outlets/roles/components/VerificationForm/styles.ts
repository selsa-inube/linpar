import styled from "styled-components";

const SyledContainerCard = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: auto;
  width: 100%;
  gap: 16px;

  @media screen and (max-width: 1020px) {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
  }
`;

export { SyledContainerCard };
