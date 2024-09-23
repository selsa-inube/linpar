import { themeClientsMock } from "@mocks/respondInvitation/themeClients.mock";
import { RespondInvitation } from "@pages/respondInvitation";
import { ConfirmationRegisterComplete } from "@pages/respondInvitation/cases/ConfirmationRegisterComplete";
import { ErrorNotAvailable } from "@pages/respondInvitation/cases/ErrorNotAvailable";
import { Route, Routes, useNavigate, useParams } from "react-router-dom";
import { ThemeProvider } from "styled-components";

function getClientTheme(businessUnitId?: string) {
  if (!businessUnitId) {
    return {};
  }

  const theme = themeClientsMock.find(
    (theme) => theme.businessUnitId === parseInt(businessUnitId)
  );

  if (!theme) {
    return {};
  }

  return theme;
}

function RespondInvitationRoutes() {
  const { businessUnit_id } = useParams();
  const navigate = useNavigate();
  const businessUnitTheme = getClientTheme(businessUnit_id);

  if (!businessUnit_id || !businessUnitTheme) {
    navigate("/respond-invitation");
    return null;
  }

  return (
    <ThemeProvider theme={businessUnitTheme}>
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
