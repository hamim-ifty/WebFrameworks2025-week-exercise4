import React from "react";
import ProductsView from "./components/ProductsView";
import { createBrowserRouter, RouterProvider, Link, Outlet } from "react-router";
import ProductDetailsView from "./components/ProductDetailsView";
import CartView from "./components/CartView";

const Layout = () => (
  <div>
    <nav style={{ display: "flex", gap: "1rem" }}>
      <Link to="/">Products</Link>
      <Link to="/cart">Cart</Link>
    </nav>
    <Outlet />
  </div>
);

const router = createBrowserRouter([
  {
    path: "/",
    Component: Layout,
    children: [
      { index: true, Component: ProductsView }, 
      { path: "products/:id", Component: ProductDetailsView }, 
      { path: "cart", Component: CartView }, 
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;