import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import { PersonalInfo } from "./pages/PersonalInfo";

const Finances = () => <div>Finances</div>;
const Success = () => <div>Success</div>;
const Applications = () => <div>Applications</div>;

const router = createBrowserRouter([
  { path: "/personal-info", element: <PersonalInfo /> },
  { path: "/finances", element: <Finances /> },
  { path: "/success", element: <Success /> },
  { path: "/applications", element: <Applications /> },
  { path: "*", element: <Navigate to="/personal-info" replace /> },
]);

export const AppRouter = () => <RouterProvider router={router} />;
