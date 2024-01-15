import { LoadingAppUI } from "./interface";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function LoadingApp() {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/");
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return <LoadingAppUI />;
}

export { LoadingApp };
