import { StyledBreadcrumbItem, StyledLink } from "./styles";
import { Text } from "../../data/Text";

function BreadcrumbItem(props) {
  const { to, children } = props;

  return (
    <StyledBreadcrumbItem>
      <StyledLink to={to}>
        <Text typoToken="labelLarge" colorToken="dark">
          {children}
        </Text>
      </StyledLink>
    </StyledBreadcrumbItem>
  );
}

export { BreadcrumbItem };
