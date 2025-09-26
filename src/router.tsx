import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PersonalInfoPage } from "./pages/PersonalInfoPage";
import { FinancesPage } from "./pages/FinancesPage";
import { ApplicationsPage } from "./pages/ApplicationsPage";
import { SuccessPage } from "./pages/SuccessPage";

const router = createBrowserRouter([
  { path: "/personal-info", element: <PersonalInfoPage /> },
  { path: "/finances", element: <FinancesPage /> },
  { path: "/success", element: <SuccessPage /> },
  { path: "/applications", element: <ApplicationsPage /> },
  { path: "*", element: <Navigate to="/personal-info" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
