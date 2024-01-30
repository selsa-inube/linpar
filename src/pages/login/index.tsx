import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginUI } from "./interface";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/login/" ||
      location.pathname === "/"
    ) {
      navigate("/login/11/checking-credentials/");
    }
  }, [location, navigate]);

  return <LoginUI />;
}

export { Login };
