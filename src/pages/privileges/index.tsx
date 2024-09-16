import { useNavigate, useLocation } from "react-router-dom";
import { useContext, useEffect } from "react";
import { LinparContext } from "@context/AppContext";
import { PrivilegesUI } from "./interface";
function Privileges() {
  const navigate = useNavigate();
  const location = useLocation();
  const { linparData } = useContext(LinparContext);
  console.log("linparData", linparData);
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
