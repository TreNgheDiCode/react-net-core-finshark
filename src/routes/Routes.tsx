import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/home-page/HomePage";
import SearchPage from "../pages/search-page/SearchPage";
import CompanyPage from "../pages/company-page/CompanyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {path: "", element: <HomePage />},
      {path: "search", element: <SearchPage />},
      {path: "company/:ticker", element: <CompanyPage />},
    ]
  },
]);
