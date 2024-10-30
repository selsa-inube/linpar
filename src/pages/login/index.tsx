import { useEffect, useContext } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { LinparContext } from "@context/AppContext";
import { LoginUI } from "./interface";
import { validateBusinessUnities } from "./utils";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();
  const { linparData, setBusinessUnitsToTheStaff } = useContext(LinparContext);

  useEffect(() => {
    if (linparData.portal.publicCode) {
      validateBusinessUnities(
        linparData.portal.publicCode,
        linparData.user.userAccount
      ).then((data) => {
        setBusinessUnitsToTheStaff(data);
      });
    }
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
