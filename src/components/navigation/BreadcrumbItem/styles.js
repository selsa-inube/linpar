import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledBreadcrumbItem = styled.li`
  display: inline-block;

  &::after {
    content: "/";
    margin: 0 8px;
  }

  &:last-child:after {
    display: none;
  }
`;

const StyledLink = styled(Link)`
  text-decoration: none;
  display: inline-block;
`;

export { StyledBreadcrumbItem, StyledLink };
