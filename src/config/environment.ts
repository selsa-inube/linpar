const IS_PRODUCTION = import.meta.env.PROD;
export const AUTH_REDIRECT_URI = import.meta.env.VITE_AUTH0_REDIRECT_URI;
const GOOGLE_REDIRECT_URI = import.meta.env.VITE_GOOGLE_REDIRECT_URI;

export const retries = 5;
export const timeout = 3000;

const environment = {
  CLIENT_ID: import.meta.env.VITE_AUTH0_CLIENT_ID,
  CLIENT_SECRET: import.meta.env.VITE_AUTH0_CLIENT_SECRET,
  REALM: import.meta.env.VITE_AUTH_REALM,
  PROVIDER: import.meta.env.VITE_AUTH_PROVIDER,
  REDIRECT_URI: IS_PRODUCTION ? window.location.origin : AUTH_REDIRECT_URI,
  GOOGLE_REDIRECT_URI: IS_PRODUCTION
    ? window.location.origin
    : GOOGLE_REDIRECT_URI,
  ICLIENT_API_URL_QUERY: import.meta.env.VITE_ICLIENT_API_URL_QUERY,
  IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS: import.meta.env
    .VITE_IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_QUERY_PROCESS,
  IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_PERSISTENCE_PROCESS: import.meta
    .env.VITE_IUTILITIES_LINIX_CATALOGOS_GENERALES_API_URL_PERSISTENCE_PROCESS,
  IVITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_IPORTAL_STAFF_QUERY_PROCESS_SERVICE,
  IPRIVILEGES_LINIX_API_URL_QUERY_POCESS_SERVICE: import.meta.env
    .VITE_IPRIVILEGES_LINIX_API_URL_QUERY_POCESS_SERVICE,
  IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PROCESS_SERVICE,
  IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE: import.meta.env
    .VITE_IROLE_LINIX_USER_SIGNUP_INVITATION_QUERY_PERSISTENCE_SERVICE,
  IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE: import.meta.env
    .VITE_IPRIVILEGES_LINIX_API_PERSISTENCE_PROCESS_SERVICE,
  IVITE_TERCEROS_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_TERCEROS_QUERY_PROCESS_SERVICE,
  IVITE_ISAAS_QUERY_PROCESS_SERVICE: import.meta.env
    .VITE_ISAAS_QUERY_PROCESS_SERVICE,

  AUTH0_DOMAIN: import.meta.env.VITE_AUTH0_DOMAIN,
};

export { environment };
