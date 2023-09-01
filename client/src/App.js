import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation
} from "react-router-dom";

import CartProvider from "./context/CartContext"

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import CategoriesPage from "./pages/CategoriesPage";
import ProductsPage from "./pages/ProductsPage";
import ProductPage from "./pages/ProductPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage"
import ReturnsPage from "./pages/ReturnsPage";
import TurnAroundPage from "./pages/TurnAroundPage";
import NotFoundPage from "./pages/NotFoundPage";

const Layout = () => {
  const location = useLocation();

  const isTurnAroundPage = location.pathname === '/turnaround';

  return (
    <>
      {!isTurnAroundPage && <Navbar />}
      <Outlet />
      {!isTurnAroundPage && <Footer />}
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
      {
        path: '/about',
        element: <AboutPage />
      },
      {
        path: '/contact',
        element: <ContactPage />
      },
      {
        path: '/shipping-and-returns',
        element: <ReturnsPage />
      },
      {
        path: '/turnaround',
        element: <TurnAroundPage />
      },
      {
        path: '*',
        element: <NotFoundPage />
      },
    ],
  }
]);

function App() {
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}

export default App;
