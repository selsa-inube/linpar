import { useNavigate, useParams } from "react-router-dom";
import { CheckingCredentialsUI } from "./interface";

function CheckingCredentials() {
  const navigate = useNavigate();
  const { user_id } = useParams();

  const fetchUser = async () => {
    try {
      const response = await fetch(
        `http://localhost:3001/v1/privileges/users/${user_id}`
      );
      const user = await response.json();
      return user;
    } catch (error) {
      console.error(error);
    }
  };

  const checkCredentials = async () => {
    try {
      const user = await fetchUser();

      if (user) {
        if (!user.clients || user.clients.length === 0) {
          navigate("/login/error/not-related-clients");
        } else if (user.clients.length === 1) {
          navigate("/login/loading-app");
        } else {
          navigate(`/login/${user_id}/clients`);
        }
      } else {
        navigate("/login/error/not-available");
      }
    } catch (error) {
      navigate("/login/error/not-available");
    }
  };

  setTimeout(checkCredentials, 2000);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
