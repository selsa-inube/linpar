import { useNavigate, useParams } from "react-router-dom";
import { CheckingCredentialsUI } from "./interface";
import { useEffect } from "react";

const API_BASE_URL = "http://localhost:3001/v1/privileges/users";

interface IUser {
  id: string;
  username: string;
  code: string;
  userID: string;
  position: string;
  active: boolean;
  email: string;
  phone: string;
  clients: number[];
}

function CheckingCredentials() {
  const navigate = useNavigate();
  const { user_id } = useParams();

  const getUser = async (): Promise<IUser | null> => {
    try {
      const response = await fetch(`${API_BASE_URL}/${user_id}`);
      if (!response.ok) {
        throw new Error("Failed to fetch user");
      }
      const user: IUser = await response.json();
      return user;
    } catch (error) {
      console.error(error);
      return null;
    }
  };

  const checkCredentials = async () => {
    try {
      const user = await getUser();

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

  useEffect(() => {
    setTimeout(checkCredentials, 2000);
  }, []);

  return <CheckingCredentialsUI />;
}

export { CheckingCredentials };
