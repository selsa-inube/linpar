import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginUI } from "./interface";
import { LinparContext } from "@context/AppContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { linparData } = useContext(LinparContext);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/login/" ||
      location.pathname === "/"
    ) {
      navigate(`/login/${linparData.user.id}/checking-credentials/`);
    }
  }, [location, navigate, linparData]);

  return <LoginUI />;
}

export { Login };
