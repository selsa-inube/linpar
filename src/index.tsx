import React from "react";
import ReactDOM from "react-dom/client";
import { Auth0Provider } from "@auth0/auth0-react";
import { environment } from "@config/environment";
import { RespondInvitationRoutesWrapper } from "@routes/respondInvitation";
import { FlagProvider } from "@inubekit/flag";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root")!);

const redirect_uri = environment.REDIRECT_URI;

const isRespondInvitationRoute = window.location.pathname.startsWith(
  "/respond-invitation"
);

root.render(
  <React.StrictMode>
    {isRespondInvitationRoute ? (
      <Auth0Provider
        domain={environment.AUTH0_DOMAIN}
        clientId={environment.CLIENT_ID}
        authorizationParams={{
          redirect_uri,
        }}
      >
        <React.Suspense fallback={<div>Loading...</div>}>
          <FlagProvider>
            <RespondInvitationRoutesWrapper />
          </FlagProvider>
        </React.Suspense>
      </Auth0Provider>
    ) : (
      <Auth0Provider
        domain={environment.AUTH0_DOMAIN}
        clientId={environment.CLIENT_ID}
        authorizationParams={{
          redirect_uri,
        }}
      >
        <App />
      </Auth0Provider>
    )}
  </React.StrictMode>
);
