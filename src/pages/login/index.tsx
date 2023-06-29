import { LoginUI } from "./interface";
import { useNavigate, useLocation } from "react-router-dom";
import { useEffect } from "react";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (location.pathname === "/login" || location.pathname === "/login/") {
      navigate("/login/checking-credentials");
    }
  }, [location, navigate]);

  return <LoginUI />;
}

export { Login };
