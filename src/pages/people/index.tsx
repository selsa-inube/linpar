import { PeopleUI } from "./interface";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function People() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/people" || location.pathname === "/people/") {
      navigate("/people/options");
    }
  }, [location, navigate]);

  return <PeopleUI />;
}

export { People };
