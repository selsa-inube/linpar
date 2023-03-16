import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import {
  StyledContentPagination,
  StyledContentText,
  StyledButton,
  StyledContentButtons,
} from "./styles";

import { Text } from "../../Text";

function Pagination(props) {
  const {
    firstEntryInPage,
    LastEntryInPage,
    totalRecords,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
  } = props;
  return (
    <StyledContentPagination>
      <StyledContentText>
        <Text typoToken="bodySmall">
          {firstEntryInPage + 1} - {LastEntryInPage} of {totalRecords}
        </Text>
      </StyledContentText>
      <StyledContentButtons>
        <StyledButton onClick={handleStartPage}>
          <MdFirstPage />
        </StyledButton>
        <StyledButton onClick={handlePrevPage}>
          <MdNavigateBefore />
        </StyledButton>
        <StyledButton onClick={handleNextPage}>
          <MdNavigateNext />
        </StyledButton>
        <StyledButton onClick={handleEndPage}>
          <MdLastPage />
        </StyledButton>
      </StyledContentButtons>
    </StyledContentPagination>
  );
}

export { Pagination };
