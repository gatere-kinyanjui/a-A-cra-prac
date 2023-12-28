import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// declare function BrowserRouter(props: BrowserRouterProps): React.ReactElement;

// interface BrowserRouterProps {
//   basename?: string;
//   children?: React.ReactNode;
//   future?: FutureConfig;
//   window?: Window;

// const root = createRoot(document.getElementById("root"));

// root.render(
//   <BrowserRouter>
//     <App />
//   </BrowserRouter>
// );
