import { ErrorPage } from "@src/components/layout/ErrorPage";
import { themeClientsMock } from "@src/mocks/respondInvitation/themeClients.mock";
import { RespondInvitation } from "@src/pages/respondInvitation";
import { ConfirmationRegisterComplete } from "@src/pages/respondInvitation/cases/ConfirmationRegisterComplete";
import { ErrorNotAvailable } from "@src/pages/respondInvitation/cases/ErrorNotAvailable";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function RespondInvitationRoutes() {
  const { client_id } = useParams();
  const navigate = useNavigate();

  const handleGetClientTheme = () => {
    if (!client_id) return;
    return themeClientsMock.find(
      (theme) => theme.clientId === parseInt(client_id)
    );
  };

  const theme = handleGetClientTheme();

  if (!theme) {
    navigate("/*");
  }

  return (
    <ThemeProvider theme={theme}>
      <Routes>
        <Route path="/" element={<RespondInvitation />} />
        <Route
          path="confirmation-register-complete/"
          element={<ConfirmationRegisterComplete />}
        />
        <Route path="/*" element={<ErrorNotAvailable />} />
      </Routes>
    </ThemeProvider>
  );
}

export { RespondInvitationRoutes };
