import { Auth0Provider } from "@auth0/auth0-react";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
//q: how can i redirects auth0 to localohost:3000 during development and to the production url during production?
//a: you can use the window.location.origin to get the current url and use it as the redirect_uri
//q: what to do if the use of window.location.origin is not working?
//a: you can use the import.meta.env.VITE_ prefix to access environment variables

const AUTH0_DOMAIN = import.meta.env.VITE_AUTH0_DOMAIN;
const AUTH0_CLIENT_ID = import.meta.env.VITE_AUTH0_CLIENT_ID;
const redirect_uri = window.location.origin;

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
