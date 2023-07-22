import "bulma/css/bulma.css";
import { createRoot } from "react-dom/client";
import React from "react";
import App from "./App";

// createRoot()の引数としてnullは許容されないので、非nullアサーション演算子を使っておく（やめたい）
createRoot(document.querySelector("#content")!).render(<App />);
