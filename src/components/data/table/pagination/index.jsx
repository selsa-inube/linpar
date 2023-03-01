import {
  MdNavigateBefore,
  MdNavigateNext,
  MdFirstPage,
  MdLastPage,
} from "react-icons/md";
import { StyledContentPagination, StyledContentText } from "./styles";

import { Text } from "../../Text";

function Pagination(props) {
  const {
    valuePage,
    valueData,
    handleStartPage,
    handlePrevPage,
    handleNextPage,
    handleEndPage,
  } = props;
  return (
    <StyledContentPagination>
      <StyledContentText>
        <Text typoToken="bodySmall">
          1 -{valuePage} of {valueData}
        </Text>
      </StyledContentText>
      <button onClick={handleStartPage}>
        <MdFirstPage />
      </button>
      <button onClick={handlePrevPage}>
        <MdNavigateBefore />
      </button>
      <button onClick={handleNextPage}>
        <MdNavigateNext />
      </button>
      <button onClick={handleEndPage}>
        <MdLastPage />
      </button>
    </StyledContentPagination>
  );
}

export { Pagination };
