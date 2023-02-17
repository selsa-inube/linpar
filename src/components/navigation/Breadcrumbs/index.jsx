import { BreadcrumbItem } from "../BreadcrumbItem";
import { StyledUl } from "./styles";

function Breadcrumbs(props) {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");

  const breadcrumbItems = crumbs.map((crumb, index) => {
    const path = `/${crumbs.slice(0, index + 1).join("/")}`;
    return { path, crumb };
  });

  return (
    <StyledUl>
      <BreadcrumbItem to="/">Home</BreadcrumbItem>
      {breadcrumbItems.map((item) => (
        <BreadcrumbItem to={item.path} children={item.crumb} />
      ))}
    </StyledUl>
  );
}

export { Breadcrumbs };
