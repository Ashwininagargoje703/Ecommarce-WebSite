import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import "tailwindcss/tailwind.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { SearchPage } from "./routes";
import ProductDetails from "./components/ProductDetails";
import Home from "./pages/Home";
import ProdunctListingPage from "./pages/ProductListingPage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProdunctDetailsPage from "./pages/ProductDetailsPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/search/:term",
    element: <SearchPage />,
  },
  {
    path: "/product-list",
    element: <ProdunctListingPage />,
  },
  {
    path: "/product-details/:id",
    element: <ProdunctDetailsPage />,
  },
]);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      <div style={{ backgroundColor: "#f8fcff" }}>
        <Navbar />
        <RouterProvider router={router} />
        <Footer />
      </div>
    </PersistGate>
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
