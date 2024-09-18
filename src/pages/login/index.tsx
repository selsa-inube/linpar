import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginUI } from "./interface";
import { AppContext } from "@context/AppContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { linparContext } = useContext(AppContext);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/login/" ||
      location.pathname === "/"
    ) {
      navigate(`/login/${linparContext.id}/checking-credentials/`);
    }
  }, [location, navigate, linparContext]);

  return <LoginUI />;
}

export { Login };
