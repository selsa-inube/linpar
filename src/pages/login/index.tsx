import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LoginUI } from "./interface";
import { AppContext } from "@context/AppContext";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useContext(AppContext);

  useEffect(() => {
    if (
      location.pathname === "/login" ||
      location.pathname === "/login/" ||
      location.pathname === "/"
    ) {
      navigate(`/login/${user.id}/checking-credentials/`);
    }
  }, [location, navigate, user]);

  return <LoginUI />;
}

export { Login };
