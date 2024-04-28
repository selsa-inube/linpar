import { AuthProvider } from "@inube/auth";
import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App";
import { enviroment } from "./config/environment";

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <AuthProvider
      clientId={enviroment.CLIENT_ID}
      clientSecret={enviroment.CLIENT_SECRET}
      provider={enviroment.PROVIDER}
      realm={enviroment.REALM}
      authorizationParams={{
        redirectUri: enviroment.REDIRECT_URI,
        scope: ["openid", "profile", "email"],
      }}
    >
      <App />
    </AuthProvider>
  </React.StrictMode>
);
