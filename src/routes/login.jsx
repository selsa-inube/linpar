import React from "react";
import { Route } from "react-router-dom";
import { CheckingCredentials } from "../pages/login/outlets/CheckingCredentials";
import { Clients } from "../pages/login/outlets/Clients";
import { LoadingApp } from "../pages/login/outlets/LoadingApp";
import { ErrorPage } from "../components/layout/ErrorPage";
import { ErrorNotAvailable } from "../pages/login/errors/ErrorNotAvailable";
import { ErrorNotClient } from "../pages/login/errors/ErrorNotClient";

function LoginRoutes() {
  return (
    <>
      <Route path="checking-credentials" element={<CheckingCredentials />} />
      <Route path="clients" element={<Clients />} />
      <Route path="loading-app" element={<LoadingApp />} />
      <Route path="error/not-related-clients" element={<ErrorNotClient />} />
      <Route path="error/not-available" element={<ErrorNotAvailable />} />
      <Route path="*" element={<ErrorPage />} />
    </>
  );
}

export { LoginRoutes };
