import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { AppPage } from "@components/layout/AppPage";

function Catalogs() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/catalogs" ||
      location.pathname === "/catalogs/"
    ) {
      navigate("/catalogs/options");
    }
  }, [location, navigate]);

  return <AppPage />;
}

export { Catalogs };
