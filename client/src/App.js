import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";

const Layout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Footer />
    </>
  );
};

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/categories/:id',
        element: <CategoriesPage />
      },
      {
        path: '/products',
        element: <ProductsPage />
      },
      {
        path: '/products/:id',
        element: <ProductPage />
      },
    ],
  }
]);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
