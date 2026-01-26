import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { Suspense, lazy } from "react";

// Standard Components
import NotificationBanner from "./components/Header/Head";
import Navbar from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
import ChefDirectory from "./components/ChefSearch";
import ChefDetails from "./components/ChefDetailsPage";
import ChefFormFormik from "./components/ChefRegistration/Register.jsx";

// Lazy Loaded Components
const Hom = lazy(() => import("./components/home/Hom"));
const About = lazy(() => import("./components/About/About"));
const Contact = lazy(() => import("./components/Contact/Contact"));
const ChefConnection = lazy(() => import("./components/ChefConection/ChefConnection"));
const Month = lazy(() => import("./components/CookForAmonth/Month"));
const OneTime = lazy(() => import("./components/OneTimeCook/OneTime"));
const Testi = lazy(() => import("./components/Testimonial/Testi"));
const Career = lazy(() => import("./components/Career/Career"));
const Blog = lazy(() => import("./components/Blog/Blog"));
const Investor = lazy(() => import("./components/Investor/Invest"));

// MOVE THIS OUTSIDE or ensure it's a pure function
const AppLayout = () => {
  return (
    <div className="app-container">
      <NotificationBanner />
      <Navbar />
      <Suspense fallback={<div className="loading-spinner">Loading...</div>}>
        <Outlet />
      </Suspense>
      <Footer />
    </div>
  );
};

// Define the router object
const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <div>Something went wrong!</div>,
    children: [
      { index: true, element: <Hom /> },
      { path: "about", element: <About /> },
      { path: "blog", element: <Blog /> },
      { path: "contact", element: <Contact /> },
      { path: "join-chefkart", element: <ChefConnection /> },
      { path: "cook-for-month", element: <Month /> },
      { path: "one-time-cook", element: <OneTime /> },
      { path: "testimonial", element: <Testi /> },
      { path: "career", element: <Career /> },
      { path: "investor-relation", element: <Investor /> },
      { path: "chef-search", element: <ChefDirectory /> },
      { path: "chef/:id", element: <ChefDetails /> },
      { path: "register", element: <ChefFormFormik /> },
    ],
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;