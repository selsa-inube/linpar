import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const AUTH0_REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;
const PROD = import.meta.env.PROD;
const redirect_uri = PROD ? window.location.origin : AUTH0_REDIRECT_URI;

const root = ReactDOM.createRoot(document.getElementById("root")!);
root.render(
  <React.StrictMode>
    <Auth0Provider
      domain={AUTH0_DOMAIN}
      clientId={AUTH0_CLIENT_ID}
      authorizationParams={{
        redirect_uri,
      }}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>
);
