import react from "react";
import reactDom from "react-dom/client";
import { Provider } from "react-redux";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Cart from "./components/CartPage/Cart";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductListPage/ProductList";
import SingleProduct from "./components/SingleProductPage/SingleProduct";
import store from "./utils/store";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Home />
      </>
    ),
    children: [
      {
        path: "/",
        element: <ProductList />,
      },
      {
        path: "/product/:id",
        element: <SingleProduct />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const App = () => {
  return (
    <Provider store={store}>
      <RouterProvider router={appRouter}></RouterProvider>
    </Provider>
  );
};

const root = reactDom.createRoot(document.getElementById("root"));
root.render(<App />);
