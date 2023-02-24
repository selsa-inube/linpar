import { BreadcrumbItem } from "../BreadcrumbItem";
import { StyledBreadcrumbs } from "./styles";

function Breadcrumbs(props) {
  const { route } = props;

  const crumbs = route.split("/").filter((crumb) => crumb !== "");

  const breadcrumbItems = crumbs.map((crumb, index) => {
    const path = `/${crumbs.slice(0, index + 1).join("/")}`;
    return { path, crumb };
  });

  return (
    <StyledBreadcrumbs>
      <BreadcrumbItem to="/" key="home">
        Home
      </BreadcrumbItem>
      {breadcrumbItems.map((item) => (
        <BreadcrumbItem to={item.path} key={item.path}>
          {item.crumb.charAt(0).toUpperCase() + item.crumb.slice(1)}
        </BreadcrumbItem>
      ))}
    </StyledBreadcrumbs>
  );
}

export { Breadcrumbs };
