import { StyledLi, StyledLink } from "./styles";

function BreadcrumbItem(props) {
  const { to, children, typoToken = "labelLarge", colorToken = "dark" } = props;

  return (
    <StyledLi>
      <StyledLink to={to} typoToken={typoToken} colorToken={colorToken}>
        {children}
      </StyledLink>
    </StyledLi>
  );
}

export { BreadcrumbItem };
