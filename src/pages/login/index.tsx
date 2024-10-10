import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LinparContext } from "@context/AppContext";
import { LoginUI } from "./interface";
import { validateBusinessUnities } from "./utils";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { linparData, setBusinessUnitSigla } = useContext(LinparContext);

  useEffect(() => {
    validateBusinessUnities(
      linparData.portal.publicCode,
      linparData.user.userAccount
    ).then((data) => {
      setBusinessUnitSigla(JSON.stringify(data));
    });
  }, [linparData.portal.publicCode]);

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
