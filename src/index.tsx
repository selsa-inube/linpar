import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";

import { environment } from "./config/environment";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const redirect_uri = environment.REDIRECT_URI;
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={environment.AUTH0_DOMAIN}
      clientId={environment.CLIENT_ID}
      authorizationParams={{
        redirect_uri,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
