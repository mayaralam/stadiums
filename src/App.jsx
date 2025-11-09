import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/home.jsx";
import StadiumPage from "./pages/stadium.jsx";
import RegisterPage from "./pages/register.jsx";
import LoginPage from "./pages/login.jsx";
import AboutPage from "./pages/about.jsx";
import ContactPage from "./pages/contact.jsx";
import { Toaster } from "react-hot-toast";
import { useState, useEffect } from 'react';
import Loader from './pages/loader.jsx';
import ProtectedRoute from "./components/ProtectedRoute";
export default function App() {
  function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000); 

    return () => clearTimeout(timer);
  }, []);

  return loading ? <Loader /> : <Home />;
}
  return (
    <BrowserRouter>
      <Toaster />
      <Routes>
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <HomePage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <AboutPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/contact"
          element={
            <ProtectedRoute>
              <ContactPage />
            </ProtectedRoute>
          }
        />
         <Route
          path="/stadium"
          element={
            <ProtectedRoute>
              <StadiumPage />
            </ProtectedRoute>
          }
        />
      <Route path="*" element={<h1>404 not found</h1>}></Route>

      </Routes>
    </BrowserRouter>
  );
}


