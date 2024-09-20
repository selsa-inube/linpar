import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { PrivilegesUI } from "./interface";
function Privileges() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/privileges" ||
      location.pathname === "/privileges/"
    ) {
      navigate("/privileges/options");
    }
  }, [location, navigate]);

  return <PrivilegesUI />;
}

export { Privileges };
