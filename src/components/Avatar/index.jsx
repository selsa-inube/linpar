import { AvatarUI } from "./interface";
import { AppContext } from "../../context";
import { useContext } from "react";

function Avatar() {
  const { user } = useContext(AppContext);
  return <AvatarUI username={user.username} businessName={user.company} />;
}

export { Avatar };
