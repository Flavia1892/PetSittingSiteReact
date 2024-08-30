import "./App.css";
import HomePage from "./Pages/HomePage";
import Layout from "./Pages/Layout";
import PageNotFound from "./Pages/PageNotFound";
import Sitters from "./Pages/Sitters";
import Contact from "./Pages/Contact";
import Privacy from "./Pages/Privacy";
import AboutUs from "./Pages/AboutUs";
import Faq from "./Pages/Faq";
import React from "react";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<HomePage />} />
      <Route path="homepage" element={<HomePage />} />
      <Route path="sitters" element={<Sitters />} />
      <Route path="contact" element={<Contact />} />
      <Route path="privacy" element={<Privacy />} />
      <Route path="aboutus" element={<AboutUs />} />
      <Route path="faq" element={<Faq />} />
      <Route path="*" element={<PageNotFound />} />
    </Route>
  )
);

export default function App() {
  return <RouterProvider router={router} />;
}
