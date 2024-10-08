import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LinparContext } from "@context/AppContext";
import { LoginUI } from "./interface";

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
      navigate(`/login/${linparData.user.userAccount}/checking-credentials/`);
    }
  }, [location, navigate, linparData]);

  return <LoginUI />;
}

export { Login };
