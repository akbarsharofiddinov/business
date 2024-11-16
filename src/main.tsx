import { createRoot } from "react-dom/client";
import App from "./App";
import "./styles/main.scss";
import "swiper/swiper-bundle.css";
import { Provider } from "react-redux";
import { store } from "@/store";

import "./i18next";

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <App />
  </Provider>
);
