import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Layout } from "./components/layouts/Layout";
import { NotFound } from "./components/errors/NotFound";
import { AboutRoute } from "./components/routes/About.routes";
import { ContactRoute } from "./components/routes/Contact.routes";
import { HomeRoute } from "./components/routes/Home.routes";
import { WebProjectsRoute } from "./components/routes/WebProjects.routes";
import { GraphicDesignsRoute } from "./components/routes/GraphicDesigns.routes";
import { ExtGraphicDesignRoute } from "./components/routes/ExtGraphicDesign.routes";
import { ExtWebProjectRoute } from "./components/routes/ExtWebProject.routes";
import ScrollToTop from "./components/misc/ScrollToTop";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <ScrollToTop>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomeRoute />}></Route>
            <Route path="/about" element={<AboutRoute />}></Route>
            <Route path="/contact" element={<ContactRoute />}></Route>
            <Route
              path="/web-development"
              element={<WebProjectsRoute />}
            ></Route>
            <Route
              path="/graphic-design"
              element={<GraphicDesignsRoute />}
            ></Route>
            <Route
              path="/web-development/:id"
              element={<ExtWebProjectRoute />}
            ></Route>{" "}
            {/* dessa gör att 404 inte fungerar ordentligt. */}
            <Route
              path="/graphic-design/:id"
              element={<ExtGraphicDesignRoute />}
            ></Route>
            {/* dessa gör att 404 inte fungerar ordentligt. */}
            <Route path="*" element={<NotFound />}></Route>
          </Route>
        </Routes>
      </ScrollToTop>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
