import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import User from "./User";

const router = createBrowserRouter([
  { path: "/", element: <App /> },
  { path: "/:id", element: <User /> },
]);

export default router;
